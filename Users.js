import React from "react";

// import "../styles/RegiserStyles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const { register, handleSubmit } = useForm();

  const [roles, setroles] = useState();

  const navigate = useNavigate();
  const submit = (data) => {
    axios
      .post("http://localhost:4000/register/addregi", data)
      .then((res) => {
        if (res.data.data) {
          console.log("Register done.......");
          alert("Register Succeessfully........");

          console.log(res);
          console.log(res.data.data[0]?._id);
          localStorage.setItem("_id", res.data.data[0]?._id);
          console.log(res.data.data[0]?.role.name);
          if (res.data.data[0]?.role.name === "DOCTOR") {
            navigate("/doctordashboard");
          } else if (res.data.data[0]?.role.name === "PATIENT") {
            navigate("/ptdashboard");
          } else if (res.data.data[0]?.role.name === "ADMIN") {
            navigate("/admindashboard");
          }
          navigate("/login");

          //role...

          //role...
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRoles();
  });
  const getRoles = () => {
    axios.get("http://localhost:4000/role/getrole").then((res) => {
      console.log(res.data.data);
      setroles(res.data.data);
    });
  };

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit(submit)}>
        <div className="form-icon">
          <span>
            <i className="icon icon-user"></i>
          </span>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            placeholder="name"
            {...register("name")}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control item"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control item"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <div className="form-group">
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

        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            placeholder="Phone Number"
            {...register("phonenum")}
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <select {...register("role")}>
            {roles?.map((role) => {
              return <option value={role._id}>{role.name}</option>;
            })}
          </select>
        </div>

        <div className="form-group">
          <input type="submit" value="submit" />
        </div>

        <button class="btn  btn-lg common-btn practo-btn" id="EmailRegister">
          Send OTP
        </button>
      </form>
      <div className="social-media">
        <h5>Sign up with social media</h5>
        <div className="social-icons">
          <a href="#">
            <i className="icon-social-facebook" title="Facebook"></i>
          </a>
          <a href="#">
            <i className="icon-social-google" title="Google"></i>
          </a>

          <a href="#">
            <i className="icon-social-twitter" title="Twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

// navigate("/login");
// } else {
//   alert("Error.............");
//   navigate("/Error");
// }
// });
// UseEffect(() => {
// getRoles();
// }, []);

// const getRoles = () => {
// axios.get("http://localhost:4000/role/getrole").then((res) => {
//   console.log(res.data.data);
//   setroles(res.data.data);
// });
// };
// };
