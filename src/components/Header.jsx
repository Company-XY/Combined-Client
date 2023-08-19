import { Link } from "react-router-dom";
import { removeUser } from "../store/Slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("user") !== null;

  const user = isAuthenticated
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const userEmail = user ? user.email : "";
  const userRole = user ? user.role : "";
  const userBalance = user ? user.balance : 0;

  //console.log(userBalance);
  //balance is still undefined
  const handleLogout = () => {
    dispatch(removeUser(user));
    navigate("/");
  };

  return (
    <main className="fixed top-0 bg-white shadow-md items-center w-full z-50 h-fit mb-2 flex justify-between py-2 px-5">
      <section className="py-2">
        <span className="font-semibold grid place-items-center cursor-pointer">
          {isAuthenticated ? (
            <span>Assist Africa</span>
          ) : (
            <Link to="/">Assist Africa</Link>
          )}
        </span>
      </section>
      {isAuthenticated ? (
        <section className="flex gap-4 justify-evenly py-2">
          <nav className="text-center flex">
            <span>
              Account:<span className="font-semibold"> {userRole}</span>
            </span>
          </nav>
          <nav className="text-center grid place-items-center">
            <span>
              Email:<span className="font-semibold"> {userEmail}</span>
            </span>
          </nav>
          <nav className="text-center grid place-items-center">
            <span>
              {/*Balance does not render, will have to fix*/}
              Balance:<span className="font-semibold"> 0 {userBalance}</span>
            </span>
          </nav>
        </section>
      ) : (
        <section className="flex gap-4 justify-evenly py-2">
          <nav className="text-center grid place-items-center cursor-pointer">
            Home
          </nav>
          <nav className="text-center grid place-items-center cursor-pointer">
            About Us
          </nav>
          <nav className="text-center grid place-items-center cursor-pointer">
            Contact Us
          </nav>
        </section>
      )}
      {isAuthenticated ? (
        <section className="flex gap-2 justify-around">
          <button className="py-1 px-4 rounded-lg border hover:bg-hoverColor ">
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="py-1 px-4 rounded-lg border bg-hoverColor "
          >
            Logout
          </button>
        </section>
      ) : (
        <section className="flex gap-2 justify-around">
          <Link to="/login">
            <button className="py-1 px-4 rounded-lg border hover:bg-hoverColor ">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="py-1 px-4 rounded-lg border bg-hoverColor ">
              Get Started
            </button>
          </Link>
        </section>
      )}
    </main>
  );
};

export default Header;
