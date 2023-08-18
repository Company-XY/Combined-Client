import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser, removeUser } from "../../store/Slices/userSlice";
import Client from "./clientDashboard";
import Freelancer from "./freelancerDashboard";

const dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userString = localStorage.getItem("user");

    if (userString) {
      const user = JSON.parse(userString);
      dispatch(setUser(user));
      console.log(user);
      fetchUserData(user._id);
    } else {
      navigate("/");
    }
  }, [dispatch, navigate]);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(
        `https://auth-server-0bsp.onrender.com/api/v1/profile/${userId}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const handleLogout = () => {
    dispatch(removeUser(user));
    navigate("/");
  };

  const role = userData?.role;

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Role: {userData.role}</p>
          <div>{role === "Client" ? <Client /> : <Freelancer />}</div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default dashboard;
