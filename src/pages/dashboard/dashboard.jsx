import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/Slices/userSlice";
import Client from "./clientDashboard";
import Freelancer from "./freelancerDashboard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userString = localStorage.getItem("user");

    if (userString) {
      const user = JSON.parse(userString);
      dispatch(setUser(user));
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
      setTimeout(() => {
        setIsLoading(false);
      }, Math.random() * 100 + 300);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  return (
    <div className="px-10 mt-5 pt-5">
      <h2 className="text-center">Dashboard</h2>
      {isLoading ? (
        <p>Loading user data...an animation will replace this for better UX</p>
      ) : (
        <div className="px-5 py-2">
          {userData && userData.role === "Freelancer" ? (
            <Freelancer />
          ) : (
            <Client />
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
