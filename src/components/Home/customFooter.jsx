import { BsTwitter, BsLinkedin, BsPaypal, BsStripe } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";
import { Link } from "react-router-dom";

function customFooter() {
  return (
    <footer className="bg-gray-800 py-10 px-10 w-[90%] rounded-lg">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 px-4 mb-8">
          <p className="text-gray-400 hover:font-semibold cursor-pointer">
            About Us.
          </p>
          <p className="text-gray-400 hover:font-semibold cursor-pointer">
            <Link to="/register">Get Started.</Link>
          </p>
          <p className="text-gray-400 hover:font-semibold cursor-pointer">
            Payment Policy.
          </p>
          <p className="text-gray-400 hover:font-semibold cursor-pointer">
            Feedback.
          </p>
          <p className="text-gray-400 hover:font-semibold cursor-pointer">
            Careers.
          </p>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8">
          <p className="text-gray-400 hover:font-semibold cursor-pointer">
            Terms of Service.
          </p>
          <p className="text-gray-400 hover:font-semibold cursor-pointer">
            Help & Support.
          </p>
          <p className="text-gray-400 hover:font-semibold cursor-pointer">
            Trust, Safety & Security.
          </p>
          <p className="text-gray-400 hover:font-semibold cursor-pointer">
            Privacy Policy
          </p>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="mb-2">
            <h2 className="text-white text-lg font-semibold mb-1 ml-2">
              Follow Us
            </h2>
            <div className="flex gap-2 justify-start">
              <p className="text-gray-400 p-1 m-1 cursor-pointer">
                <BsTwitter size={20} className="hover:scale-110" />
              </p>
              <p className="text-gray-400 p-1 m-1 cursor-pointer">
                <BsLinkedin size={20} className="hover:scale-110" />
              </p>
              <p className="text-gray-400 p-1 m-1 cursor-pointer">
                <AiFillInstagram size={20} className="hover:scale-110" />
              </p>
            </div>
          </div>
          <hr />
          <div className="mt-3 pt-2">
            <div className="flex gap-2 justify-start">
              <p className="text-gray-400 p-1 m-1 cursor-pointer grid place-items-center">
                <BsPaypal size={20} className="hover:scale-110" />
              </p>
              <p className="text-gray-400 p-1 m-1 cursor-pointer grid place-items-center">
                <BsStripe size={20} className="hover:scale-110" />
              </p>
              <p className="text-gray-400 p-1 m-1 cursor-pointer grid place-items-center">
                <FaCcVisa size={25} className="hover:scale-110" />
              </p>
              <p className="text-gray-400 p-1 m-1 cursor-pointer grid place-items-center">
                <FaCcMastercard size={25} className="hover:scale-110" />
              </p>
              <p className="text-gray-400 p-1 m-1 cursor-pointer grid place-items-center">
                <FaCcAmex size={25} className="hover:scale-110" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default customFooter;
