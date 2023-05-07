const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const loginRoutes = require("./routes/loginRoute");
const roleRoutes = require("./routes/RoleRoute");
const registerRoutes = require("./routes/RegisterRoute");
const clinicRoutes = require("./routes/ClinicRoute");
const AppointmentRoutes = require("./routes/AppointmentRoute");
const fileroutes = require("./routes/FileRoutes");
const stateroutes = require("./routes/StateRoute");
const cityRoutes = require("./routes/CityRoutes");

app.use("/add", loginRoutes);
app.use("/role", roleRoutes);
app.use("/register", registerRoutes);
app.use("/clinic", clinicRoutes);
app.use("/appointment", AppointmentRoutes);
app.use("/file", fileroutes);
app.use("/state", stateroutes);
app.use("/city", cityRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/odsdb", {}, (err) => {
  if (err) {
    console.log("Error in db connections....");
  } else {
    console.log("Database connected....");
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
