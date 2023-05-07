import React from "react";
import { Helmet } from "react-helmet";

export const Offer = () => {
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
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/tempusdominus/js/moment.min.js"></script>
        <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
        <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
        <script src="lib/twentytwenty/jquery.event.move.js"></script>
        <script src="lib/twentytwenty/jquery.twentytwenty.js"></script>

        <script src="js/main.js"></script>
      </Helmet>

      <div
        class="container-fluid bg-offer my-5 py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-lg-7 wow zoomIn" data-wow-delay="0.6s">
              <div class="offer-text text-center rounded p-5">
                <h1 class="display-5 text-white">
                  Save 30% On Your First Dental Checkup
                </h1>
                <p class="text-white mb-4">
                  Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et
                  dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos
                  vero eos vero ea et dolore eirmod diam duo lorem magna sit
                  dolore sed et.
                </p>
                <a href="appointment.html" class="btn btn-dark py-3 px-5 me-3">
                  Appointment
                </a>
                <a href="" class="btn btn-light py-3 px-5">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-5">
              <div class="section-title mb-4">
                <h5 class="position-relative d-inline-block text-primary text-uppercase">
                  Pricing Plan
                </h5>
                <h1 class="display-5 mb-0">
                  We Offer Fair Prices for Dental Treatment
                </h1>
              </div>
              <p class="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo eirmod magna dolore erat amet
              </p>
              <h5
                class="text-uppercase text-primary wow fadeInUp"
                data-wow-delay="0.3s"
              >
                Call for Appointment
              </h5>
              <h1 class="wow fadeInUp" data-wow-delay="0.6s">
                +012 345 6789
              </h1>
            </div>
            <div class="col-lg-7">
              <div
                class="owl-carousel price-carousel wow zoomIn owl-loaded owl-drag"
                data-wow-delay="0.9s"
              >
                <div class="owl-stage-outer">
                  <div class="owl-stage">
                    <div class="owl-item cloned">
                      <div class="price-item pb-4">
                        <div class="position-relative">
                          <img
                            class="img-fluid rounded-top"
                            src="img/price-2.jpg"
                            alt=""
                          />
                          <div class="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle">
                            <h2 class="text-primary m-0">$49</h2>
                          </div>
                        </div>
                        <div class="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                          <h4>Dental Implant</h4>
                          <hr class="text-primary w-50 mx-auto mt-0" />
                          <div class="d-flex justify-content-between mb-3">
                            <span>Modern Equipment</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <span>Professional Dentist</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <span>24/7 Call Support</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <a
                            href="appointment.html"
                            class="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                          >
                            Appointment
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="owl-item cloned">
                      <div class="price-item pb-4">
                        <div class="position-relative">
                          <img
                            class="img-fluid rounded-top"
                            src="img/price-3.jpg"
                            alt=""
                          />
                          <div class="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle">
                            <h2 class="text-primary m-0">$99</h2>
                          </div>
                        </div>
                        <div class="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                          <h4>Root Canal</h4>
                          <hr class="text-primary w-50 mx-auto mt-0" />
                          <div class="d-flex justify-content-between mb-3">
                            <span>Modern Equipment</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <span>Professional Dentist</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <span>24/7 Call Support</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <a
                            href="appointment.html"
                            class="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                          >
                            Appointment
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="owl-item">
                      <div class="price-item pb-4">
                        <div class="position-relative">
                          <img
                            class="img-fluid rounded-top"
                            src="img/price-1.jpg"
                            alt=""
                          />
                          <div class="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle">
                            <h2 class="text-primary m-0">$35</h2>
                          </div>
                        </div>
                        <div class="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                          <h4>Teeth Whitening</h4>
                          <hr class="text-primary w-50 mx-auto mt-0" />
                          <div class="d-flex justify-content-between mb-3">
                            <span>Modern Equipment</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <span>Professional Dentist</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <span>24/7 Call Support</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <a
                            href="appointment.html"
                            class="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                          >
                            Appointment
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="owl-item active">
                      <div class="price-item pb-4">
                        <div class="position-relative">
                          <img
                            class="img-fluid rounded-top"
                            src="img/price-2.jpg"
                            alt=""
                          />
                          <div class="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle">
                            <h2 class="text-primary m-0">$49</h2>
                          </div>
                        </div>
                        <div class="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                          <h4>Dental Implant</h4>
                          <hr class="text-primary w-50 mx-auto mt-0" />
                          <div class="d-flex justify-content-between mb-3">
                            <span>Modern Equipment</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <span>Professional Dentist</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <span>24/7 Call Support</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <a
                            href="appointment.html"
                            class="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                          >
                            Appointment
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="owl-item active">
                      <div class="price-item pb-4">
                        <div class="position-relative">
                          <img
                            class="img-fluid rounded-top"
                            src="img/price-3.jpg"
                            alt=""
                          />
                          <div class="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle">
                            <h2 class="text-primary m-0">$99</h2>
                          </div>
                        </div>
                        <div class="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                          <h4>Root Canal</h4>
                          <hr class="text-primary w-50 mx-auto mt-0" />
                          <div class="d-flex justify-content-between mb-3">
                            <span>Modern Equipment</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <span>Professional Dentist</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <span>24/7 Call Support</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <a
                            href="appointment.html"
                            class="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                          >
                            Appointment
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="owl-item cloned">
                      <div class="price-item pb-4">
                        <div class="position-relative">
                          <img
                            class="img-fluid rounded-top"
                            src="img/price-1.jpg"
                            alt=""
                          />
                          <div class="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle">
                            <h2 class="text-primary m-0">$35</h2>
                          </div>
                        </div>
                        <div class="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                          <h4>Teeth Whitening</h4>
                          <hr class="text-primary w-50 mx-auto mt-0" />
                          <div class="d-flex justify-content-between mb-3">
                            <span>Modern Equipment</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <span>Professional Dentist</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <span>24/7 Call Support</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <a
                            href="appointment.html"
                            class="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                          >
                            Appointment
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="owl-item cloned">
                      <div class="price-item pb-4">
                        <div class="position-relative">
                          <img
                            class="img-fluid rounded-top"
                            src="img/price-2.jpg"
                            alt=""
                          />
                          <div class="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle">
                            <h2 class="text-primary m-0">$49</h2>
                          </div>
                        </div>
                        <div class="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                          <h4>Dental Implant</h4>
                          <hr class="text-primary w-50 mx-auto mt-0" />
                          <div class="d-flex justify-content-between mb-3">
                            <span>Modern Equipment</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <span>Professional Dentist</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <span>24/7 Call Support</span>
                            <i class="fa fa-check text-primary pt-1"></i>
                          </div>
                          <a
                            href="appointment.html"
                            class="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                          >
                            Appointment
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-nav">
                  <div class="owl-prev">
                    <i class="bi bi-arrow-left"></i>
                  </div>
                  <div class="owl-next">
                    <i class="bi bi-arrow-right"></i>
                  </div>
                </div>
                <div class="owl-dots disabled"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container-fluid bg-primary bg-testimonial py-5 my-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div
                class="owl-carousel testimonial-carousel rounded p-5 wow zoomIn owl-loaded owl-drag"
                data-wow-delay="0.6s"
              >
                <div class="owl-stage-outer">
                  <div class="owl-stage">
                    <div class="owl-item cloned">
                      <div class="testimonial-item text-center text-white">
                        <img
                          class="img-fluid mx-auto rounded mb-4"
                          src="img/testimonial-1.jpg"
                          alt=""
                        />
                        <p class="fs-5">
                          Dolores sed duo clita justo dolor et stet lorem kasd
                          dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                          labore diam erat. Erat dolor rebum sit ipsum.
                        </p>
                        <hr class="mx-auto w-25" />
                        <h4 class="text-white mb-0">Client Name</h4>
                      </div>
                    </div>
                    <div class="owl-item cloned">
                      <div class="testimonial-item text-center text-white">
                        <img
                          class="img-fluid mx-auto rounded mb-4"
                          src="img/testimonial-2.jpg"
                          alt=""
                        />
                        <p class="fs-5">
                          Dolores sed duo clita justo dolor et stet lorem kasd
                          dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                          labore diam erat. Erat dolor rebum sit ipsum.
                        </p>
                        <hr class="mx-auto w-25" />
                        <h4 class="text-white mb-0">Client Name</h4>
                      </div>
                    </div>
                    <div class="owl-item active">
                      <div class="testimonial-item text-center text-white">
                        <img
                          class="img-fluid mx-auto rounded mb-4"
                          src="img/testimonial-1.jpg"
                          alt=""
                        />
                        <p class="fs-5">
                          Dolores sed duo clita justo dolor et stet lorem kasd
                          dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                          labore diam erat. Erat dolor rebum sit ipsum.
                        </p>
                        <hr class="mx-auto w-25" />
                        <h4 class="text-white mb-0">Client Name</h4>
                      </div>
                    </div>
                    <div class="owl-item">
                      <div class="testimonial-item text-center text-white">
                        <img
                          class="img-fluid mx-auto rounded mb-4"
                          src="img/testimonial-2.jpg"
                          alt=""
                        />
                        <p class="fs-5">
                          Dolores sed duo clita justo dolor et stet lorem kasd
                          dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                          labore diam erat. Erat dolor rebum sit ipsum.
                        </p>
                        <hr class="mx-auto w-25" />
                        <h4 class="text-white mb-0">Client Name</h4>
                      </div>
                    </div>
                    <div class="owl-item cloned">
                      <div class="testimonial-item text-center text-white">
                        <img
                          class="img-fluid mx-auto rounded mb-4"
                          src="img/testimonial-1.jpg"
                          alt=""
                        />
                        <p class="fs-5">
                          Dolores sed duo clita justo dolor et stet lorem kasd
                          dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                          labore diam erat. Erat dolor rebum sit ipsum.
                        </p>
                        <hr class="mx-auto w-25" />
                        <h4 class="text-white mb-0">Client Name</h4>
                      </div>
                    </div>
                    <div class="owl-item cloned">
                      <div class="testimonial-item text-center text-white">
                        <img
                          class="img-fluid mx-auto rounded mb-4"
                          src="img/testimonial-2.jpg"
                          alt=""
                        />
                        <p class="fs-5">
                          Dolores sed duo clita justo dolor et stet lorem kasd
                          dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                          labore diam erat. Erat dolor rebum sit ipsum.
                        </p>
                        <hr class="mx-auto w-25" />
                        <h4 class="text-white mb-0">Client Name</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-nav">
                  <div class="owl-prev">
                    <i class="bi bi-arrow-left"></i>
                  </div>
                  <div class="owl-next">
                    <i class="bi bi-arrow-right"></i>
                  </div>
                </div>
                <div class="owl-dots disabled"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
              <div class="section-title bg-light rounded h-100 p-5">
                <h5 class="position-relative d-inline-block text-primary text-uppercase">
                  Our Dentist
                </h5>
                <h1 class="display-6 mb-4">
                  Meet Our Certified &amp; Experienced Dentist
                </h1>
                <a href="appointment.html" class="btn btn-primary py-3 px-5">
                  Appointment
                </a>
              </div>
            </div>
            <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div class="team-item">
                <div class="position-relative rounded-top">
                  <img
                    class="img-fluid rounded-top w-100"
                    src="img/team-1.jpg"
                    alt=""
                  />
                  <div class="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-twitter fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-linkedin-in fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-instagram fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div class="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                  <h4 class="mb-2">Dr. John Doe</h4>
                  <p class="text-primary mb-0">Implant Surgeon</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div class="team-item">
                <div class="position-relative rounded-top">
                  <img
                    class="img-fluid rounded-top w-100"
                    src="img/team-2.jpg"
                    alt=""
                  />
                  <div class="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-twitter fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-linkedin-in fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-instagram fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div class="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                  <h4 class="mb-2">Dr. John Doe</h4>
                  <p class="text-primary mb-0">Implant Surgeon</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
              <div class="team-item">
                <div class="position-relative rounded-top">
                  <img
                    class="img-fluid rounded-top w-100"
                    src="img/team-3.jpg"
                    alt=""
                  />
                  <div class="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-twitter fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-linkedin-in fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-instagram fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div class="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                  <h4 class="mb-2">Dr. John Doe</h4>
                  <p class="text-primary mb-0">Implant Surgeon</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div class="team-item">
                <div class="position-relative rounded-top">
                  <img
                    class="img-fluid rounded-top w-100"
                    src="img/team-4.jpg"
                    alt=""
                  />
                  <div class="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-twitter fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-linkedin-in fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-instagram fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div class="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                  <h4 class="mb-2">Dr. John Doe</h4>
                  <p class="text-primary mb-0">Implant Surgeon</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div class="team-item">
                <div class="position-relative rounded-top">
                  <img
                    class="img-fluid rounded-top w-100"
                    src="img/team-5.jpg"
                    alt=""
                  />
                  <div class="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-twitter fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-linkedin-in fw-normal"></i>
                    </a>
                    <a class="btn btn-primary btn-square m-1" href="#">
                      <i class="fab fa-instagram fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div class="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                  <h4 class="mb-2">Dr. John Doe</h4>
                  <p class="text-primary mb-0">Implant Surgeon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container-fluid position-relative pt-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="container">
          <div class="bg-primary p-5">
            <form class="mx-auto">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control border-white p-3"
                  placeholder="Your Email"
                />
                <button class="btn btn-dark px-4">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        class="container-fluid bg-dark text-light py-5 wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <div class="container pt-5">
          <div class="row g-5 pt-4">
            <div class="col-lg-3 col-md-6">
              <h3 class="text-white mb-4">Quick Links</h3>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-light mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Home
                </a>
                <a class="text-light mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>About Us
                </a>
                <a class="text-light mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Our
                  Services
                </a>
                <a class="text-light mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog
                </a>
                <a class="text-light" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Contact Us
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h3 class="text-white mb-4">Popular Links</h3>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-light mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Home
                </a>
                <a class="text-light mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>About Us
                </a>
                <a class="text-light mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Our
                  Services
                </a>
                <a class="text-light mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog
                </a>
                <a class="text-light" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Contact Us
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h3 class="text-white mb-4">Get In Touch</h3>
              <p class="mb-2">
                <i class="bi bi-geo-alt text-primary me-2"></i>123 Street, New
                York, USA
              </p>
              <p class="mb-2">
                <i class="bi bi-envelope-open text-primary me-2"></i>
                info@example.com
              </p>
              <p class="mb-0">
                <i class="bi bi-telephone text-primary me-2"></i>+012 345 67890
              </p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h3 class="text-white mb-4">Follow Us</h3>
              <div class="d-flex">
                <a
                  class="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="#"
                >
                  <i class="fab fa-twitter fw-normal"></i>
                </a>
                <a
                  class="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="#"
                >
                  <i class="fab fa-facebook-f fw-normal"></i>
                </a>
                <a
                  class="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="#"
                >
                  <i class="fab fa-linkedin-in fw-normal"></i>
                </a>
                <a
                  class="btn btn-lg btn-primary btn-lg-square rounded"
                  href="#"
                >
                  <i class="fab fa-instagram fw-normal"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid text-light py-4">
        <div class="container">
          <div class="row g-0">
            <div class="col-md-6 text-center text-md-start">
              <p class="mb-md-0">
                ©{" "}
                <a class="text-white border-bottom" href="#">
                  Your Site Name
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div class="col-md-6 text-center text-md-end">
              <p class="mb-0">
                Designed by{" "}
                <a
                  class="text-white border-bottom"
                  href="https://htmlcodex.com"
                >
                  HTML Codex
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
      >
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};
