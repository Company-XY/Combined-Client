import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  return (
    <main className="px-10 py-5 grid place-items-center w-full h-[90vh]">
      <section>
        <h2 className="text-center font-semibold text-2xl pb-2 mb-2">
          Enter correct credentials to login
        </h2>
        <form>
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
              className="px-4 py-2 border rounded-lg"
              type="password"
              required
              placeholder=""
            />
          </div>
          <div className="w-full text-center grid place-items-center">
            <button
              type="submit"
              className="w-full grid place-items-center gap-2 rounded-lg hover:bg-hoverColor py-2 px-4 border"
            >
              <span className="flex text-center gap-2">
                <span>
                  <AiOutlineSwapRight size={20} />
                </span>
                <span className="items-center">Login</span>
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
