import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/Slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
//import ReactLoading from "react-loading";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        " https://auth-server-0bsp.onrender.com/api/v1/login",
        {
          email,
          password,
        }
      );

      const user = response.data;

      localStorage.setItem("user", JSON.stringify(user));

      setIsLoading(false);

      console.log(user);
      navigate("/dashboard");
      dispatch(setUser(user));
    } catch (error) {
      setError("Invalid Username or Password");
      setIsLoading(false);
    }
  };

  const handleShowPassChange = () => {
    setShowPass(!showPass);
  };

  return (
    <main id="Home" className="bg-cover bg-fixed px-10 py-5 w-full h-[90vh] flex items-center justify-center">
      <section className="max-w-2xl mx-auto">
        <h2 className="text-center font-semibold text-2xl pb-2 mb-2">
          Enter correct credentials to login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label className="flex gap-2" htmlFor="email">
              {" "}
              <span>
                <FaUserShield size={20} />
              </span>{" "}
              Email Address
            </label>
            <input
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus-ring focus:border-blue-500 mb-2`}
              type="email"
              value={email}
              required
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 py-2">
            <label className="flex gap-2 mt-2" htmlFor="password">
              {" "}
              <span>
                <BsFillShieldLockFill size={20} />
              </span>{" "}
              Password
            </label>
            <input
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus-ring focus:border-blue-500 mb-2`}
              type={showPass ? "text" : "password"}
              value={password}
              required
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex gap-2">
              <label htmlFor="showPass">Show Password</label>
              <input
                type="checkbox"
                checked={showPass}
                onChange={handleShowPassChange}
              />
            </div>
          </div>
          {/*Should be styled to display error */}
          <p className="error text-red-400 mt-2 pt-2">{error}</p>

          <div className="w-full text-center grid place-items-center">
            <button
              type="submit"
              className="bg-white w-full flex justify-center items-center text-blue-500 py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <span className="flex text-center gap-2">
                <span>
                  <AiOutlineSwapRight size={20} />
                </span>
                <span className="items-center">
                  {isLoading ? <span>Please Wait</span> : <span>Login</span>}
                </span>
              </span>
            </button>
          </div>
        </form>
        <div className="mt-3 pt-2 flex flex-col gap-2">
          <p>
            Forgot Password ? Reset{" "}
            <span className="font-semibold">
              <Link to="/reset">Here</Link>
            </span>
          </p>
          <p>
            New to Assist Africa ? Signup{" "}
            <span className="font-semibold">
              <Link to="/register">Here</Link>
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
