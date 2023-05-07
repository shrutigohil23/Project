import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Form, TimePicker } from "antd";
// import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../Homepage/Navbar";
import { Appointment } from "./../Homepage/Appointment";

export const DoctorDetails = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    axios
      .post("http://localhost:4000/adddrdata/adddrdata", data)
      .then((res) => {
        if (res.data.data) console.log(res.data.data);

        alert("Data is added............");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-image">
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <link
          rel="stylesheet"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
          rel="stylesheet"
        />
        <link href="lib/twentytwenty/twentytwenty.css" rel="stylesheet" />

        <link href="css/bootstrap.min.css" rel="stylesheet" />

        <link href="css/style.css" rel="stylesheet" />
      </Helmet>

      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <Link to="index.html" className="navbar-brand p-0">
          <h1 className="m-0 text-primary">
            <Link to="/">
              {" "}
              <i Na="fa fa-tooth me-2"></i>DentCare
            </Link>
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <li>
              <Link to="/Login" className="nav-item nav-link active">
                Login
              </Link>
            </li>
            <li>
              <Link to="/patientapi" className="nav-item nav-link">
                Patient Appointment
              </Link>
            </li>

            <li>
              <Link to="/patientdetails" className="nav-item nav-link">
                Patient Form
              </Link>
            </li>
            <li>
              <Link to="/patientdetails" className="nav-item nav-link">
                Patients
              </Link>
            </li>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="team.html" className="dropdown-item">
                  Our Dentist
                </Link>
                <Link to="/apispage" className="dropdown-item">
                  apis
                </Link>
                <Link to="appointment.html" className="dropdown-item">
                  Appointment
                </Link>
                <Link to="" className="dropdown-item">
                  Lab Tests
                </Link>
                <Link to="/doctordetails" className="dropdown-item">
                  Doctor Dashboard
                </Link>
                <Link to="/ptdashboard" className="dropdown-item">
                  Patient Dashboard
                </Link>
              </div>
            </div>
            <Link to="/surgeries" className="nav-item nav-link">
              Surgeries
            </Link>
          </div>
          <button
            type="button"
            className="btn text-dark"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search"></i>
          </button>
          <Link
            to="appointment.html"
            className="btn btn-primary py-2 px-4 ms-3"
          >
            Appointment
          </Link>
        </div>
      </nav>

      <h1>Patient Appoinments</h1>

      <Link to="/patientapi">Patient API</Link>
      <br />

      <Link to="/patientdetails">Patient Form</Link>
    </div>
  );
};

// <h1>Doctor Details</h1>

// <form onSubmit={handleSubmit(submit)}>
//   <div>
//     <label>DrProfileId</label>
//     <input
//       type="text"
//       placeholder="DrProfileId"
//       {...register("DrProfileId")}
//     />
//   </div>
//   <div>
//     <label> DrName</label>
//     <input type="text" placeholder=" DrName" {...register("DrName")} />
//   </div>
//   <div>
//     <lable>Qualification</lable>
//     <input
//       type="text"
//       placeholder="Qualification"
//       {...register("Qualification")}
//     />
//   </div>

//   <div>
//     <lable>Specalization</lable>
//     <input
//       type="text"
//       placeholder="Specalization"
//       {...register("Specalization")}
//     />
//   </div>

//   <div>
//     <lable>Experiance</lable>
//     <input
//       type="Experiance"
//       placeholder="Experiance"
//       {...register("Experiance")}
//     />
//   </div>

//   <div>
//     <label>Profile_pic</label>
//     <input
//       type="Profile_pic"
//       placeholder="Profile_pic"
//       {...register("Profile_pic")}
//     />
//   </div>

//   <div>
//     <lable>About</lable>
//     <input type="About" placeholder="About" {...register("About")} />
//   </div>

//   <div>
//     <label>Timings</label>
//     <Form.Item name="timings">
//       <TimePicker.RangePicker />
//     </Form.Item>
//   </div>

//   <div>
//     <input type="submit" value="SUBMIT"></input>
//   </div>
//   <br />
//   <button type="btn btn-primary" value="Doctor Data">
//     <Link to="/doctorapi" className="m-2">
//       Doctor Data
//     </Link>
//   </button>
// </form>
