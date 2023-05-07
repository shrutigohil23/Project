import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const ListAppointment = () => {
  // var id = useParams().id;
  const [appo, setUsers] = useState([]);
  var id = useParams().id;

  const getApi = () => {
    axios
      .get("http://localhost:4000/appointment/doctordatabyid/" + id)
      .then((res) => {
        console.log(res.data.users);
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = (id) => {
    axios
      .delete("http://localhost:4000/appointment/appointment/" + id)
      .then((res) => {
        getApi();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={getApi} class="btn btn-info">
        Appointments List
      </button>
      <table class="table table-hover">
        <thead class="table table-primary">
          <tr>
            <th>img</th>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
            <th>Clinic</th>
            <th>Slots</th>
            <th>Doctor Name</th>
          </tr>
        </thead>

        <tbody>
          {appo &&
            appo?.map((d) => {
              return (
                <tr>
                  <td>
                    <a
                      class="avatar avatar-sm me-2"
                      href="/react/template/patient/doctor-profile"
                    >
                      <img
                        class="avatar-img rounded-circle"
                        src="https://doccure.dreamguystech.com/react/template/210634dca875b5880520c51b4577e6aa.jpg"
                        alt="User"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </a>
                  </td>

                  <td>{d?.patientname}</td>
                  <td>{d?.age}</td>
                  <td>{d?.date}</td>
                  <td>{d?.time}</td>
                  <td>{d?.reason}</td>
                  <td>{d?.clinic?.clinicName}</td>
            

                  <td>
                    <button
                      class="btn btn-danger"
                      onClick={() => deleteUser(d?._id)}
                    >
                      Cancle slot
                    </button>
                  </td>
                  <td>{d?.doctor?.DrName}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
