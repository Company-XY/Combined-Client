import { Link } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";

const Password = () => {
  return (
    <main className="px-10 py-5 grid place-items-center w-full h-[90vh]">
      <section>
        <h2 className="text-center text-2xl pb-2 mb-2">
          Create New Password for Assist Africa
        </h2>
        <form>
          <div className="flex flex-col gap-2">
            <label className="flex gap-2" htmlFor="password">
              {" "}
              <span>
                <RiLockPasswordFill size={20} />
              </span>{" "}
              New Password
            </label>
            <input
              className="px-4 py-2 border rounded-lg"
              type="password"
              required
              placeholder=""
            />
          </div>
          <div className="flex flex-col gap-2 mt-2 pt-2">
            <label className="flex gap-2" htmlFor="password">
              {" "}
              <span>
                <RiLockPasswordFill size={20} />
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
          <div className="w-full text-center grid place-items-center mt-2 pt-2">
            <button
              type="submit"
              className="w-full grid place-items-center gap-2 rounded-lg hover:bg-hoverColor py-2 px-4 border"
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

export default Password;
