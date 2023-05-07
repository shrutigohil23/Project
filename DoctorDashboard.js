import React from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaStethoscope } from "react-icons/fa";

export const DoctorDashboard = () => {
  const [user, setuser] = useState("");

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

  const logout = () => {
    localStorage.clear();
    alert("Logout Successfullyyy Done ....");
    Navigate("/login");
  };

  return (
    <div className>
      <div>
        <div className="doctor-img">
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
            <Link to="index.html" className="navbar-brand p-0">
              <h1 className="m-0 text-primary">
                <Link to="/">
                  {" "}
                  <FaStethoscope /> '{user.name}'
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
                  <Link to="/listappointment" className="nav-item nav-link">
                    My Patients
                  </Link>
                </li>

                <li>
                  <Link to="/clinic" className="nav-item nav-link">
                    Add Clinic
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

              <Link to="/drprofile" className="btn btn-primary py-2 px-4 ms-3">
                Add New Profile
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

          <div class="main-wrapper">
            <section id="home" class="divider">
              <div class="container-fluid p-0">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide carousel-fade"
                  data-ride="carousel"
                  data-interval="3500"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item ">
                      <img
                        class="d-block w-150"
                        src="assets/img/slider/slider-1.jpg"
                        alt="First slide"
                      />
                      <div
                        class="carousel-caption d-none d-md-block aos"
                        data-aos="fade-up"
                      >
                        <div className="centered">
                          <span>We Provide Solution</span>
                          <h1>To stressless Life</h1>
                          <p>
                            People who are more perfectionist are most likely to
                            be depressed,
                            <br />
                            Because they stress themselves out so much.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src="assets/img/slider/slider-2.jpg"
                        alt="Second slide"
                      />
                      <div
                        class="carousel-caption d-none d-md-block aos"
                        data-aos="fade-up"
                      >
                        <div className="text">
                          <span>We Provide Solution</span>
                          <h2>Health Care Solution</h2>
                          <p>
                            Every day we bring hope to millions of children in
                            the world's
                            <br /> hardest places as a sign of God's
                            unconditional love.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item active">
                      <img
                        class="d-block w-100"
                        src="assets/img/slider/slider-3.jpg"
                        alt="Third slide"
                      />
                      <div
                        class="carousel-caption d-none d-md-block aos"
                        data-aos="fade-up"
                      >
                        <div className="text">
                          <span>We Provide total</span>
                          <h2>Personalised care</h2>
                          <p>
                            People who are more perfectionist are most likely to
                            be depressed,
                            <br />
                            Because they stress themselves out so much.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="">Next</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
