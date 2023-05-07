import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import "../styles/Styles.css";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const submit = (data) => {
    axios
      .post("http://localhost:4000/register/register/login", data)
      .then((res) => {
        if (res.data.data) {
          console.log("user found....");
          alert("Login Succeessfully........");

          // console.log(res);
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
        }
      })

      .catch((err) => {
        console.log("user not found....");
        alert("Login Failed....");
      });
  };

  return (
    <div class="login">
      <div class="login-page">
        <div class="form">
          <form class="login-form" onSubmit={handleSubmit(submit)}>
            <input type="email" placeholder="email" {...register("email")} />
            <input
              type="password"
              placeholder="password"
              {...register("password")}
            />
            <button type="submit">login</button>
            <br />
            <br />

            <Link to="/users">Register Here....</Link>
          </form>
        </div>
      </div>
    </div>
  );
};
