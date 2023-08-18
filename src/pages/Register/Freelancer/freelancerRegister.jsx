import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/Slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill, BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const freelancerRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [consultation, setConsultation] = useState("");
  const [type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password === password2) {
      try {
        const response = await axios.post(
          "https://auth-server-0bsp.onrender.com/api/v1/register/freelancer",
          {
            type,
            name,
            email,
            password,
            consultation,
          }
        );

        const user = response.data;
        setIsLoading(false);
        dispatch(setUser(user));
        navigate("/login");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    } else {
      setPasswordError("Passwords Do not Match");
      setIsLoading(false);
    }
  };

  return (
    <main className="px-10 py-5 grid place-items-center w-full h-[90vh]">
      <section>
        <h2 className="text-center font-semibold text-2xl pb-2 mb-2">
          Enter correct credentials to join Assist Africa as a Client
        </h2>
        <p className="py-2 mb-2">
          Register as a Freelancer instead{" "}
          <span>
            <Link to="/register/freelancer">
              {" "}
              <span className="font-semibold">Here</span>
            </Link>
          </span>
        </p>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col gap-2 py-2 mb-2">
            <label>Account Type</label>
            <select
              className="px-4 py-2 border rounded-lg"
              value={type}
              required
              onChange={(e) => setType(e.target.value)}
            >
              <option>---</option>
              <option value="Individual">Individual</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 my-2">
            <label className="flex gap-2" htmlFor="name">
              {" "}
              <span>
                <BsFillPersonCheckFill size={20} />
              </span>{" "}
              Username
            </label>
            <input
              className="px-4 py-2 border rounded-lg"
              type="text"
              required
              placeholder=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex gap-2" htmlFor="email">
              {" "}
              <span>
                <FaUserShield size={20} />
              </span>{" "}
              Email Address
            </label>
            <input
              className="px-4 py-2 border rounded-lg"
              type="email"
              required
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-3 py-2 flex flex-col gap-2">
            <label>Do you Offer Consultation Services</label>
            <select
              className="px-4 py-2 border rounded-lg"
              value={consultation}
              required
              onChange={(e) => setConsultation(e.target.value === "true")}
            >
              <option>---</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <label className="flex gap-2 mt-2" htmlFor="password">
              {" "}
              <span>
                <BsFillShieldLockFill size={20} />
              </span>{" "}
              Password
            </label>
            <input
              className="px-4 py-2 border rounded-lg"
              type="password"
              required
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 py-2">
            <label className="flex gap-2 mt-2" htmlFor="password">
              {" "}
              <span>
                <BsFillShieldLockFill size={20} />
              </span>{" "}
              Confirm Password
            </label>
            <input
              className="px-4 py-2 border rounded-lg"
              type="password"
              required
              placeholder=""
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <p className="text-red-400">{passwordError}</p>
          <div className="w-full text-center grid place-items-center">
            <button
              type="submit"
              className="flex gap-2 rounded-lg hover:bg-hoverColor py-2 px-4 border"
            >
              <span>
                <AiOutlineSwapRight size={20} />
              </span>
              <span className="items-center">
                {isLoading ? (
                  <span>Registration in Progress</span>
                ) : (
                  <span>Register</span>
                )}
              </span>
            </button>
          </div>
        </form>
        <p className="py-2 mt-2">
          Already have an account ?{" "}
          <span className="font-semibold">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </section>
    </main>
  );
};

export default freelancerRegister;
