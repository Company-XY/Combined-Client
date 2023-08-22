import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import FreelancerRegister from "../pages/Register/Freelancer/freelancerRegister";
import ClientRegister from "../pages/Register/Client/clientRegister";
import Dashboard from "../pages/dashboard/dashboard";
import Register from "../pages/Register/Register";
import Reset from "../pages/Reset";
import Password from "../pages/Password";
import Profile from "../pages/Profile";
import Jobs from "../pages/dashboard/Jobs";
//password component will have to take on token as parameter to verify the reset password action
//Hence the correct path will be path="/password/:token"

function Routers() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/client" element={<ClientRegister />} />
      <Route path="/register/freelancer" element={<FreelancerRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:id" element={<Jobs />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/password/:token" element={<Password />} />
    </Routes>
  );
}

export default Routers;
