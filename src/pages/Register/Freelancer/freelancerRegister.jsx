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
  const [consultation, setConsultation] = useState(true);
  const [type, setType] = useState("Individual");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

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
        navigate("/dashboard");
      } catch (error) {
        setError(error.response.data.message);
        setIsLoading(false);
      }
    } else {
      setPasswordError("Passwords Do not Match");
      setIsLoading(false);
    }
  };

  const handleShowPassChange = () => {
    setShowPass(!showPass);
  };

  return (
    <main
      id="Home"
      className="bg-cover bg-center px-10 py-5 grid place-items-center w-full h-full"
    >
      <section className="max-w-2xl mx-auto mt-20 border-2 py-4 px-8 mb-20 rounded-xl shadow-lg">
        <h2 className="text-center font-semibold text-2xl pb-2 mb-2">
          Enter correct credentials to join Assist Africa as a Freelancer
        </h2>
        <p className="py-2 mb-2">
          Register as a Client instead{" "}
          <span>
            <Link to="/register/client">
              {" "}
              <span className="font-semibold">Here</span>
            </Link>
          </span>
        </p>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col gap-2 py-2 mb-2">
            <label>Account Type</label>
            <select
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus-ring focus:border-blue-500 mb-2`}
              value={type}
              required
              onChange={(e) => setType(e.target.value)}
            >
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
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus-ring focus:border-blue-500 mb-2`}
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
              className={`w-full px-4 py-2 rounded-lg focus:outline-none border focus-ring focus:border-blue-500 mb-2`}
              type="email"
              required
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-3 py-2 flex flex-col gap-2">
            <label>Do you Offer Consultation services</label>
            <select
              className={`w-full px-4 py-2 rounded-lg focus:outline-none border focus-ring focus:border-blue-500 mb-2`}
              value={consultation}
              required
              onChange={(e) => setConsultation(e.target.value === "true")}
            >
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
              className={`w-full px-4 py-2 rounded-lg focus:outline-none border focus-ring focus:border-blue-500 mb-2`}
              type={showPass ? "text" : "password"}
              required
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 py-2">
            <label className="flex gap-2 mt-2" htmlFor="password">
              {" "}
              <span>
                <BsFillShieldLockFill size={20} />
              </span>{" "}
              Confirm Password
            </label>
            <input
              className={`w-full px-4 py-2 rounded-lg focus:outline-none border focus-ring focus:border-blue-500 mb-2`}
              type={showPass ? "text" : "password"}
              required
              placeholder=""
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="showPass">Show Password</label>
            <input
              type="checkbox"
              checked={showPass}
              onChange={handleShowPassChange}
            />
          </div>
          <p className="text-red-400 py-2 my-2">{error}</p>
          <p className="text-red-400 py-2 my-2">{passwordError}</p>
          <div className="w-full text-center grid place-items-center">
            <button
              type="submit"
              className="bg-white w-full flex justify-center items-center text-blue-500 py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
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
