import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { removeUser } from "../store/Slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [nav, setNav] = useState(false);

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

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const closeModal = (e) => {
    e.preventDefault();
    setNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className={`fixed top-0 ${
        scrolling
          ? "md:bg-transparent shadow-md md:backdrop-blur "
          : "md:bg-gray-100"
      } items-center bg-gray-100 w-full z-50 h-fit mb-2 flex justify-between py-2 px-5`}
    >
      <section className="py-2">
        <span className="font-semibold grid place-items-center cursor-pointer text-2xl hover:text-blue-600">
          {isAuthenticated ? (
            <RouterLink to="/dashboard">Assist Africa</RouterLink>
          ) : (
            <RouterLink to="/">Assist Africa</RouterLink>
          )}
        </span>
      </section>
      {/*-------------Desktop navigation----------*/}
      {isAuthenticated ? (
        <section className="hidden md:flex gap-4 justify-evenly py-2">
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
        <section className="hidden md:flex gap-4 justify-evenly py-2 text-lg font-semibold">
          <nav className="text-center grid place-items-center cursor-pointer  hover:text-blue-500">
            <RouterLink to="/">Home</RouterLink>
          </nav>
          <nav className="text-center grid place-items-center cursor-pointer hover:text-blue-500">
            <ScrollLink
              to="About"
              smooth={true}
              duration={700}
              offset={-70}
              spy={true}
            >
              About Us
            </ScrollLink>
          </nav>
          <nav className="text-center grid place-items-center cursor-pointer hover:text-blue-500">
            <ScrollLink
              to="Services"
              smooth={true}
              duration={700}
              offset={-70}
              spy={true}
            >
              Services
            </ScrollLink>
          </nav>
          <nav className="text-center grid place-items-center cursor-pointer  hover:text-blue-500">
            <ScrollLink
              to="Contact"
              smooth={true}
              duration={1000}
              offset={-70}
              spy={true}
            >
              Contact Us
            </ScrollLink>
          </nav>
        </section>
      )}
      {isAuthenticated ? (
        <section className="hidden md:flex gap-2 justify-around">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
          >
            {" "}
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Logout
          </button>
        </section>
      ) : (
        <section className="hidden md:flex gap-2 justify-around">
          <RouterLink to="/login">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
            >
              {" "}
              Login
            </button>
          </RouterLink>
          <RouterLink to="/register">
            <button className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
              Get Started
            </button>
          </RouterLink>
        </section>
      )}
      {/*----------------------Mobile Navigation-----------------*/}
      <section className="flex md:hidden">
        <section className="z-50 top-0 right-0" onClick={(e) => setNav(!nav)}>
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </section>
        {nav && (
          <section
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-right w-full"
          >
            <div className="bg-white p-4 rounded-md w-full h-1/3">
              <section className="">
                {isAuthenticated ? (
                  <section className="flex flex-col gap-4 justify-evenly py-2">
                    <nav className="text-center flex">
                      <span>
                        Account:
                        <span className="font-semibold"> {userRole}</span>
                      </span>
                    </nav>
                    <nav className="text-center grid place-items-center">
                      <span>
                        Email:
                        <span className="font-semibold"> {userEmail}</span>
                      </span>
                    </nav>
                    <nav className="text-center grid place-items-center">
                      <span>
                        Balance:
                        <span className="font-semibold"> 0 {userBalance}</span>
                      </span>
                    </nav>
                  </section>
                ) : (
                  <section className="flex flex-col gap-4 justify-evenly py-2 text-lg">
                    <nav className="text-center grid place-items-center cursor-pointer  hover:text-blue-500">
                      <RouterLink to="/">Home</RouterLink>
                    </nav>
                    <nav
                      onClick={() => setNav(!nav)}
                      className="text-center grid place-items-center cursor-pointer hover:text-blue-500"
                    >
                      <ScrollLink
                        onClick={closeModal}
                        to="About"
                        smooth={true}
                        duration={700}
                        offset={-70}
                        spy={true}
                      >
                        About Us
                      </ScrollLink>
                    </nav>
                    <nav className="text-center grid place-items-center cursor-pointer hover:text-blue-500">
                      <ScrollLink
                        onClick={closeModal}
                        to="Services"
                        smooth={true}
                        duration={700}
                        offset={-70}
                        spy={true}
                      >
                        Services
                      </ScrollLink>
                    </nav>
                    <nav className="text-center grid place-items-center cursor-pointer  hover:text-blue-500">
                      <ScrollLink
                        onClick={closeModal}
                        to="Contact"
                        smooth={true}
                        duration={1000}
                        offset={-70}
                        spy={true}
                      >
                        Contact Us
                      </ScrollLink>
                    </nav>
                  </section>
                )}
              </section>
              <section>
                {isAuthenticated ? (
                  <section className="flex gap-2 justify-around">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                      {" "}
                      Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                      Logout
                    </button>
                  </section>
                ) : (
                  <section className="flex gap-2 justify-around">
                    <RouterLink to="/login">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
                      >
                        {" "}
                        Login
                      </button>
                    </RouterLink>
                    <RouterLink to="/register">
                      <button className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
                        Get Started
                      </button>
                    </RouterLink>
                  </section>
                )}
              </section>
            </div>
          </section>
        )}
      </section>
    </main>
  );
};

export default Header;
