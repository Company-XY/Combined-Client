import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="px-5 py-2 md:px-10 md:py-5 w-full h-[70vh] flex flex-col justify-center items-center">
      <section className="px-2">
        <div className="text-center">
          <h2 className="font-semibold text-xl md:text-3xl">
            Re-Inventing Freelancing
          </h2>
          <p className="leading-8 text-lg md:text-2xl mt-3">
            Join us today and experience a seamless and rewarding journey where
            freelancers and clients come together to achieve excellence.
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-3 md:gap-2 text-center py-4">
        <div className="cursor-pointer hover:font-semibold">
          <p>
            <Link
              to="/register/client"
              className="text-blue-500 hover:underline"
            >
              Sign up now as a client
            </Link>
          </p>
        </div>
        <div className="cursor-pointer hover:font-semibold">
          <p>
            <Link
              to="/register/freelancer"
              className="text-blue-500 hover:underline"
            >
              Sign up now as a freelancer
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
