import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill, BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const freelancerRegister = () => {
  return (
    <main className="px-10 py-5 grid place-items-center w-full h-[90vh]">
      <section>
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
        <form>
          <div className="flex flex-col gap-2 mb-2">
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
            />
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
            />
          </div>
          <div className="w-full text-center grid place-items-center">
            <button
              type="submit"
              className="flex gap-2 rounded-lg hover:bg-hoverColor py-2 px-4 border"
            >
              <span>
                <AiOutlineSwapRight size={20} />
              </span>
              <span className="items-center">Register</span>
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
