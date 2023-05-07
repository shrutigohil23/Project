import { useForm } from "react-hook-form";
import axios from "axios";
import { Navbar } from "../Homepage/Navbar";

export const PatientDetails = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    axios
      .post("http://localhost:4000/appointment/appointment", data)
      .then((res) => {
        if (res.data.data) console.log(res.data.data);
        alert("Data is added............");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <h1>Patient Details</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>PatientName</label>
          <input
            type="text"
            placeholder="patientname"
            {...register("patientName")}
          />
        </div>
        <div>
          <label> PhoneNumber</label>
          <input
            type="number"
            placeholder="phonenum"
            {...register("PhoneNumber")}
          />
        </div>
        <div>
          <lable>Disease</lable>
          <input type="text" placeholder="disease" {...register("Disease")} />
        </div>

        <div>
          <lable>Pincode</lable>
          <input type="text" placeholder="pincode" {...register("Pincode")} />
        </div>

        <div>
          <lable>Age</lable>
          <input type="text" placeholder="age" {...register("Age")} />
        </div>

        <div>
          <label> Gender</label>
          <br />
          Male
          <input
            type="radio"
            name="Gender"
            value="Male"
            {...register("Gender")}
          ></input>
          Female
          <input
            type="radio"
            name="Gender"
            value="FeMale"
            {...register("Gender")}
          ></input>
        </div>

        <div>
          <input type="submit" value="SUBMIT"></input>
        </div>
      </form>
    </div>
  );
};
