import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";

const Password = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const { token } = useParams();

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== password2) {
      setMessage("Passwords Do Not Match");
      setLoading(false);
    } else {
      try {
        const response = await axios.post(
          `https://auth-server-0bsp.onrender.com/api/v1/reset/password`,
          { resetToken: token, newPassword: password }
        );
        if (response.status === 200) {
          setSuccess("Password updated successfully.");
          setPassword("");
          setLoading(false);
        } else {
          setMessage(
            "Password should comprise alphanumeric text with at least one special character."
          );
        }
      } catch (error) {
        setMessage("An error occurred while updating password.");
      }
    }
  };

  return (
    <main className="px-10 py-5 grid place-items-center w-full h-[90vh]">
      <section className="max-w-2xl mx-auto">
        <h2 className="text-center text-2xl pb-2 mb-2">
          Create New Password for Assist Africa
        </h2>
        <form onSubmit={handlePasswordChange}>
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
              value={password}
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
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
              value={password2}
              required
              placeholder=""
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <p className="text-red-400 py-2 my-2">{message}</p>
          <p className="text-green-400 py-2 my-2">{success}</p>
          <div className="w-full text-center grid place-items-center mt-2 pt-2">
            <button
              type="submit"
              className="w-full grid place-items-center gap-2 rounded-lg hover:bg-hoverColor py-2 px-4 border"
            >
              <span className="flex text-center">
                <span className="items-center">
                  {loading ? (
                    <span>Please Wait</span>
                  ) : (
                    <span>Update Password</span>
                  )}
                </span>
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
