import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import FreelancerRegister from "../pages/Register/Freelancer/freelancerRegister";
import ClientRegister from "../pages/Register/Client/clientRegister";
import Dashboard from "../pages/dashboard/dashboard";

function Routers() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register/client" element={<ClientRegister />} />
      <Route path="/register/freelancer" element={<FreelancerRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Routers;
