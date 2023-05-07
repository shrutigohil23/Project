import { Outlet, navigate } from "react-router-dom";
import { DoctorDashboard } from "./Pages/DoctorDashboard";

const PrivateRoutes = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <navigate to="/login" />;
};

export default PrivateRoutes;
