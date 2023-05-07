import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Carousel = () => {
  const style1 = {};
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

      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3">
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Keep Your Body Healthy
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Take The Best Quality Body Treatment
                  </h1>
                  <Link
                    Link
                    to="/appointment"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Appointment
                  </Link>
                  <Link
                    Link
                    to=""
                    className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3">
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Keep Your Body Healthy
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Take The Best Quality Body Treatment
                  </h1>
                  <Link
                    Link
                    to="/appointment"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Appointment
                  </Link>
                  <Link
                    Link
                    to=""
                    className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
