import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Homepage/HomeRoute";
import { Login } from "./Pages/Login";
import { DoctorDetails } from "./Pages/DoctorDetails";
import { Doctorapi } from "./Pages/API/Doctorapi";
import { ApisPage } from "./Pages/API/ApisPage";
import { PatientDetails } from "./Pages/PatientDetails";
import { Patientapi } from "./Pages/API/Patientapi";

import { Users } from "./Pages/Users";
import { AdminDashboard } from "./Pages/AdminDashboard";
import { Sergeries } from "./Homepage/Sergeries";
import { Ptdashboard } from "./Pages/Ptdashboard";
import { DoctorDashboard } from "./Pages/DoctorDashboard";
import { Appointment } from "./Pages/Appointment";
import { DrProfile } from "./Pages/DrProfile";
import { Clinic } from "./Pages/Clinic";
import { ViewProfile } from "./Pages/ViewProfile";
import { Error } from "./Pages/Error";
import { ListAppointment } from "./Pages/ListAppointment";
import ProtectedRoutes from "./ProctedRoutes";
import Horizontalchart from "./Pages/chart-horizontal";
import { Payment } from "./Pages/Payment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/doctordashboard" element={<DoctorDashboard />} />
          <Route path="/ptdashboard" element={<Ptdashboard />} />

          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/doctorapi" element={<Doctorapi />} />
        <Route path="/patientapi" element={<Patientapi />} />
        <Route path="/doctordetails" element={<DoctorDetails />} />
        <Route path="/patientdetails" element={<PatientDetails />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />

        <Route path="/apispage" element={<ApisPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/clinic" element={<Clinic />} />
        <Route path="/surgeries" element={<Sergeries />} />
        <Route path="/ptdashboard" element={<Ptdashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/drprofile" element={<DrProfile />} />
        <Route path="/error" element={<Error />} />
        <Route path="/viewprofile/:id" element={<ViewProfile />} />
        <Route path="/listappointment/:id" element={<ListAppointment />} />
        <Route path="/chart" element={<Horizontalchart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
