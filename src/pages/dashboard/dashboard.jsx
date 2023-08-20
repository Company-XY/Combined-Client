import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/Slices/userSlice";
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

  const role = userData?.role;

  return (
    <div className="px-10 mt-5 pt-5">
      <h2 className="text-center">Dashboard</h2>
      {userData ? (
        <div className="px-5 py-2">
          <div>{role === "Freelancer" ? <Freelancer /> : <Client />}</div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default dashboard;
