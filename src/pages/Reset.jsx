import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://auth-server-0bsp.onrender.com/api/v1/reset",
        { email }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("User Not Found");
    }
  };

  return (
    <main className="px-10 py-5 grid place-items-center w-full h-[90vh]">
      <section className="max-w-2xl mx-auto">
        <h2 className="text-center text-2xl pb-2 mb-2">
          Enter your correct email address to reset password
        </h2>
        <form onSubmit={handleResetPassword}>
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
          <p className="text-red-400 py-2 my-2">{message}</p>
          <div className="w-full text-center grid place-items-center mt-2 pt-2">
            <button
              type="submit"
              className="bg-white w-full flex justify-center items-center text-blue-500 py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <span className="flex text-center">
                <span className="items-center">Reset Password</span>
              </span>
            </button>
          </div>
        </form>
        <div className="mt-3 pt-2 flex flex-col gap-2">
          <p>
            <span className="font-semibold">
              <Link to="/login">Login instead</Link>
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

export default Reset;
