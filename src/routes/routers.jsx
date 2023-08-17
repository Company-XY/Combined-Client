import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import FreelancerRegister from "../pages/freelancerRegister";
import ClientRegister from "../pages/clientRegister";
import Dashboard from "../pages/dashboard/dashboard";

function Routers() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/clientRegister" element={<ClientRegister />} />
      <Route path="/freelancerRegister" element={<FreelancerRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Routers;
