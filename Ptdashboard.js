import axios from "axios";

import { Helmet } from "react-helmet";
import { Link, Navigate } from "react-router-dom";
import { FaBed } from "react-icons/fa";
import { useEffect, useState } from "react";
import "../styles/ptdashboard.css";
import { ListAppointment } from "./ListAppointment";

export const Ptdashboard = () => {
  const [flag, setflag] = useState("");
  const [patient, setuser] = useState("");
  const [products, setproducts] = useState([]);
  const [docList, setDoc] = useState();

  const getLoggedinUserData = () => {
    var id = localStorage.getItem("_id");
    axios
      .get("http://localhost:4000/register/register/" + id)
      .then((res) => {
        console.log(res.data.data);
        setuser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getLoggedinUserData();
  }, []);

  const getApi = () => {
    axios
      .get("http://localhost:4000/file/getdata")
      .then((res) => {
        console.log(res.data.data);
        setDoc(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    localStorage.clear();
    alert("Logout Successfullyyy Done....");
    Navigate("/login");
  };

  const searchHandler = (e) => {
    console.log(e.target.value);
    const searchValue = e.target.value;
    axios
      .get(`http://localhost:4000/file/search/${searchValue}`)
      .then((res) => {
        console.log(res.data);
        setproducts(res.data.products);
      })
      .catch((err) => {
        setflag(
          <tr>
            <td colSpan="3">No Doctors found</td>
          </tr>
        );
      });
  };

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
        <link type="image/x-icon" href="assets/img/favicon.png" rel="icon" />

        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

        <link
          rel="stylesheet"
          href="assets/plugins/fontawesome/css/fontawesome.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/plugins/fontawesome/css/all.min.css"
        />

        <link rel="stylesheet" href="assets/css/aos.css" />

        <link rel="stylesheet" href="assets/css/style.css" />
      </Helmet>

      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <Link to="index.html" className="navbar-brand p-0">
          <h1 className="m-0 text-primary">
            <Link to="/" style={{ color: "info" }}>
              {" "}
              <FaBed /> Welcome......'{patient.name}'
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
              <Link to="/" className="nav-item nav-link active">
                Your Profile
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-item nav-link">
                Your Appointment
              </Link>
            </li>

            <li>
              <Link onClick={getApi} className="nav-item nav-link">
                Search for Doctors
              </Link>
            </li>
          </div>

          {/* <input type="text" placeholder="Search For Dotcors" onChange={(e)=>{searchHandler(e)}}/> */}

          <Link
            to="/appointment"
            className="btn btn-info py-2 px-4 ms-3"
            style={{ color: "white" }}
          >
            Appointment
          </Link>

          <Link
            to="/patientprofile"
            className="btn btn-info py-2 px-4 ms-3"
            style={{ color: "white" }}
          >
            Profile Setting
          </Link>

          <Link
            onClick={logout}
            to="/Login"
            className="btn btn-danger py-2 px-4 ms-3"
          >
            LogOut
          </Link>
        </div>
      </nav>
      {/* <section className="section section-search">
        <div className="container-fluid">
          <div className="banner-wrapper">
            <div className="banner-header text-center">
              <h1>Search Doctor, Make an Appointment</h1>
              <p>
                Discover the best doctors, clinic &amp; hospital the city
                nearest to you.
              </p>
            </div>
            <div className="search-box">
              <form action="/home">
                <div className="form-group search-location">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Location"
                  />
                  <span className="form-text">Based on your Location</span>
                </div>
                <div className="form-group search-info">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
                  />
                  <span className="form-text">
                    Ex : Dental or Sugar Check up etc
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary search-btn mt-0"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="svg-inline--fa fa-search fa-w-16 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    />
                  </svg>{" "}
                  <span>Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      <div class="row g-4">
        {docList?.map((u) => {
          return (
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img
                    class="img-fluid"
                    src={`${process.env.PUBLIC_URL}/uploads/${u?.name}`}
                    alt="user"
                  />
                </div>
                <div class="team-text bg-light text-center p-4">
                  <h5> DRName:{u.DrName}</h5>
                  <h5>Specalization:{u.Specalization}</h5>
                  <h5>Experiance:{u.Experiance}</h5>
                  <Link to={`/viewprofile/${u._id}`}>View Profile</Link>
                  <br />
                  <Link class="btn btn-info" to="/payment">
                    Booking
                  </Link>

                  <p class="text-primary"></p>
                  <div class="team-social text-center">
                    <a class="btn btn-square" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    </tr>
            </thead>
            <tbody>
                {
                    products?.map((product)=>{
                        return(
                            <tr>
                                <td>{product.DrName}</td>
                               </tr>
                        )
                    }
                    )
                }
                {flag}
            </tbody>
              </table>*/}
    </div>
  );
};
