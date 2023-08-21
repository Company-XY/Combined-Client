import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Register = () => {
  return (
    <main
      id="Home"
      className="bg-cover bg-center h-[89vh] w-full px-10 py-5 grid place-items-center"
    >
      <div className="px-24">
        <h2 className="font-semibold text-3xl text-center">
          Welcome to Assist Africa
        </h2>
        <p className="leading-8 px-10 text-center m-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          consectetur enim reiciendis eveniet debitis! Minima totam quos labore
          sequi magnam ducimus beatae tempora consequatur officia quaerat
          eveniet sit, animi et! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Adipisci, sint doloribus provident tempora corporis
          exercitationem nam vel sed rem eius sit deserunt sunt. Dolore ut error
          sunt aliquam dolorum repellat.
        </p>
        <section className="flex flex-col gap-6 justify-center md:flex-row md:justify-evenly">
          <Link to="/register/client">
            <div className="border rounded-lg hover:text-white transition-all duration-300 hover:bg-blue-800">
              <div className="bg-gray-100 p-6">
                <h2 className="font-semibold text-lg mb-2">
                  Looking for experts in Virtual Assistance
                </h2>
                <p className="text-gray-600">{/* Your description */}</p>
              </div>
              <div className="bg-gray-200 p-4 flex justify-between items-center">
                <span>Get Started</span>
                <FaArrowRight className="transform group-hover:-rotate-90 transition-all duration-300" />
              </div>
            </div>
          </Link>
          <Link to="/register/freelancer">
            <div className="border rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300">
              <div className="bg-gray-100 p-6">
                <h2 className="font-semibold text-lg mb-2">
                  Looking for work as a Virtual Assistant
                </h2>
                <p className="text-gray-600">{/* Your description */}</p>
              </div>
              <div className="bg-gray-200 p-4 flex justify-between items-center">
                <span>Get Started</span>
                <FaArrowRight className="transform group-hover:-rotate-90 transition-all duration-300" />
              </div>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Register;
