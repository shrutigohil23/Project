import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "../styles/drprofile.css";

export const DrProfile = () => {
  const { register, handleSubmit } = useForm();

  const [doctors, setdoctors] = useState();

  const submit = (data) => {
    console.log(data);
    // console.log(data.file[0]);
    var formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("DrName", data.DrName);
    formData.append("Qualification", data.Qualification);
    formData.append("Specalization", data.Specalization);
    formData.append("Experiance", data.Experiance);
    formData.append("Fees", data.Fees);
    formData.append("About", data.About);

    axios
      .post("http://localhost:4000/file/upload", formData)
      .then((res) => {
        if (res.data) console.log(res.data);

        alert("Doctor is added............");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to added doctor..........");
      });
  };

  useEffect(() => {
    getdoctordata();
  }, []);

  const getdoctordata = () => {
    axios.get("http://localhost:4000/file/getdata").then((res) => {
      console.log(res.data);
      setdoctors(res.data);
    });
  };

  return (
    <div>
      <div className="content">
        <div className="container-fluid">
          <form onSubmit={handleSubmit(submit)}>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body-center">
                  <div className="row form-row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="change-avatar">
                          <div className="team-item position-relative rounded overflow-hidden"></div>

                          <div className="upload-img">
                            <div className="change-photo-btn">
                              <span>
                                <i className="fa fa-upload" /> Upload Photo
                              </span>

                              <input
                                type="file"
                                name="file"
                                {...register("file")}
                              />
                            </div>
                            <small className="form-text text-muted">
                              Allowed JPG, or PNG. Max size of 2MB
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          DrName <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("DrName")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Qualification <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register(" Qualification")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Specalization <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("Specalization")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Experience <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("Experiance")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Fees</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("Fees")}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Gender</label>
                        <select className="select form-control">
                          <option>Select</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>About</label>
                        <textarea
                          className="form-control"
                          {...register("About")}
                        />
                      </div>

                      <div>
                        <input type="submit" value="SUBMIT"></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
