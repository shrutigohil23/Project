import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export const ViewProfile = () => {
  const [docList, setDoc] = useState();

  var id = useParams().id;
  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    axios
      .get("http://localhost:4000/file/getdata/" + id)
      .then((res) => {
        console.log(res.data.data);
        setDoc(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="content-profile">
        <div className="container-fluid">
          <div className="card">
            {/* <button onClick={getApi}>btn</button> */}
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img
                    class="img-fluid"
                    src={`${process.env.PUBLIC_URL}/uploads/${docList?.name}`}
                    alt="user"
                  />
                </div>
                <div class="team-text bg-light text-center p-4">
                  <h5> DRName:{docList?.DrName}</h5>
                  <h5>Qualification:{docList?.Qualification}</h5>
                  <h5>Specalization:{docList?.Specalization}</h5>
                  <h5>Experiance:{docList?.Experiance}</h5>
                  <h5>Fees:{docList?.Fees}</h5>

                  <p>
                    <h5>
                      <b>About:</b>
                    </h5>
                    {docList?.About}
                  </p>

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
          </div>
        </div>
      </div>
    </div>
  );
};
