import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Navbar = () => {
  const auth = localStorage.getItem("user");
  return (
    <div>
      <Helmet>
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
              <i Na="fa fa-tooth me-2"></i>Online Doctor System
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
              <Link to="/doctordashboard" className="nav-item nav-link">
                Doctor Dashboard
              </Link>
            </li>

            <li>
              <Link to="/users" className="nav-item nav-link">
                Register
              </Link>
            </li>
            <li>
              <Link to="/ptdashboard" className="nav-item nav-link">
                Patient Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admindashboard" className="nav-item nav-link">
                Admin
              </Link>
            </li>
          </div>
          <button
            type="button"
            className="btn text-dark"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search"></i>
          </button>
          <Link to="/appointment" className="btn btn-primary py-2 px-4 ms-3">
            Appointment
          </Link>
        </div>
      </nav>
    </div>
  );
};
