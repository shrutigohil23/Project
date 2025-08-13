import os
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix,
    roc_auc_score,
)
from sklearn.preprocessing import MinMaxScaler


WINDOWS_FILE_PATH = r"C:\Users\Admin\AppData\Local\Temp\86bf72ba-93e8-4f40-abbb-7b27eb077901_archive (2).zip.901\data.csv"


def load_dataset(possible_path: str | None = None):
    """Load Wisconsin Breast Cancer dataset.

    If a CSV 'possible_path' exists, use it (expects a 'diagnosis' column with 'M'/'B').
    Otherwise, fall back to sklearn's built-in dataset.

    Returns: X (ndarray), y (ndarray with 1=malignant, 0=benign), source (str)
    """
    if possible_path and os.path.exists(possible_path):
        df = pd.read_csv(possible_path)
        # Drop obvious non-feature columns if present
        for col in ["id", "Unnamed: 32", "Unnamed: 0"]:
            if col in df.columns:
                df = df.drop(columns=[col])
        if "diagnosis" not in df.columns:
            raise ValueError("CSV found but missing required 'diagnosis' column.")
        y = (df["diagnosis"].values == "M").astype(int)
        X = df.drop(columns=["diagnosis"]).astype(float).values
        return X, y, "csv"

    # Fallback to sklearn dataset
    from sklearn.datasets import load_breast_cancer

    data = load_breast_cancer()
    X = data.data.astype(float)
    # sklearn dataset: 0=malignant, 1=benign -> map to 1=malignant, 0=benign
    y = (1 - data.target).astype(int)
    return X, y, "sklearn"


class AveragedPerceptron:
    def __init__(self, epochs: int = 10, lr: float = 1.0, shuffle: bool = True, random_state: int | None = 42):
        self.epochs = epochs
        self.lr = lr
        self.shuffle = shuffle
        self.random_state = np.random.RandomState(random_state) if random_state is not None else None
        self.w = None
        self.b = 0.0
        self.w_sum = None
        self.b_sum = 0.0

    def fit(self, X: np.ndarray, y: np.ndarray):
        n_samples, n_features = X.shape
        self.w = np.zeros(n_features, dtype=float)
        self.b = 0.0
        self.w_sum = np.zeros(n_features, dtype=float)
        self.b_sum = 0.0
        count = 1

        y_mod = np.where(y == 1, 1, -1)  # +1 for malignant, -1 for benign

        indices = np.arange(n_samples)
        for _ in range(self.epochs):
            if self.shuffle and self.random_state is not None:
                self.random_state.shuffle(indices)
            for idx in indices:
                xi = X[idx]
                target = y_mod[idx]
                if target * (np.dot(self.w, xi) + self.b) <= 0:
                    self.w += self.lr * target * xi
                    self.b += self.lr * target
                self.w_sum += self.w
                self.b_sum += self.b
                count += 1

        # Average weights and bias
        self.w = self.w_sum / count
        self.b = self.b_sum / count
        return self

    def decision_function(self, X: np.ndarray) -> np.ndarray:
        return np.dot(X, self.w) + self.b

    def predict_proba(self, X: np.ndarray) -> np.ndarray:
        # Sigmoid of the margin as a pseudo-probability
        scores = self.decision_function(X)
        probs = 1.0 / (1.0 + np.exp(-scores))
        return probs

    def predict(self, X: np.ndarray, threshold: float = 0.5) -> np.ndarray:
        probs = self.predict_proba(X)
        return (probs >= threshold).astype(int)


def evaluate_threshold(model: AveragedPerceptron, X_test: np.ndarray, y_test: np.ndarray, threshold: float):
    probs = model.predict_proba(X_test)
    y_pred = (probs >= threshold).astype(int)

    acc = accuracy_score(y_test, y_pred)
    prec = precision_score(y_test, y_pred, zero_division=0)
    rec = recall_score(y_test, y_pred, zero_division=0)
    f1 = f1_score(y_test, y_pred, zero_division=0)
    auc = roc_auc_score(y_test, probs)
    tn, fp, fn, tp = confusion_matrix(y_test, y_pred).ravel()
    specificity = tn / (tn + fp) if (tn + fp) != 0 else 0.0

    return [acc, prec, rec, specificity, f1, auc, fp, fn]


def main():
    X, y, source = load_dataset(WINDOWS_FILE_PATH)

    scaler = MinMaxScaler()
    X = scaler.fit_transform(X)

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.1, random_state=42, stratify=y
    )

    ap = AveragedPerceptron(epochs=15, lr=1.0)
    ap.fit(X_train, y_train)

    results = {
        "Threshold 0.50": evaluate_threshold(ap, X_test, y_test, threshold=0.50),
        "Threshold 0.54": evaluate_threshold(ap, X_test, y_test, threshold=0.54),
    }

    df_results = pd.DataFrame(
        results,
        index=[
            "Accuracy",
            "Precision",
            "Recall (Sensitivity)",
            "Specificity",
            "F1 Score",
            "AUC (probabilities)",
            "False Positives",
            "False Negatives",
        ],
    )

    print(f"Dataset source: {source}")
    print(df_results)


if __name__ == "__main__":
    main()