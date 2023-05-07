import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { TimePicker } from "antd";

export const Clinic = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    axios
      .post("http://localhost:4000/clinic/addclinic", data)
      .then((res) => {
        if (res.data.data) {
          console.log(res.data.data);
          alert("Clinic added Succeessfully........");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="content">
        <div className="container-fluid">
          <form onSubmit={handleSubmit(submit)}>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <h2>Clinic Form</h2>
                <div className="card-body-center">
                  <div className="row form-row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="change-avatar">
                          <div className="team-item position-relative rounded overflow-hidden"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Clinic Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("clinicName")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("Address")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Phone Num <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("PhoneNum")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Time <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("Timing")}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>About</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("About")}
                        />
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select State</option>
                            <option value="1">Gujarat</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select City</option>
                            <option value="1">Ahmedabad</option>
                            <option value="2">Rajkot</option>
                            <option value="3">Jamnager</option>
                          </select>
                        </div>
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
