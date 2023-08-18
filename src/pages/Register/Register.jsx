import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="w-full h-[90vh] px-10 py-5 grid place-items-center">
      <div className="px-24">
        <h2 className="font-semibold text-3xl text-center">
          Welcome to Assist Africa
        </h2>
        <p className="leading-8 px-10 text-center m-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          consectetur enim reiciendis eveniet debitis! Minima totam quos labore
          sequi magnam ducimus beatae tempora consequatur officia quaerat
          eveniet sit, animi et! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Adipisci, sint doloribus provident tempora corporis
          exercitationem nam vel sed rem eius sit deserunt sunt. Dolore ut error
          sunt aliquam dolorum repellat.
        </p>
        <section className="flex gap-2 justify-center">
          <Link to="/register/client">
            <button className="border rounded-lg hover:bg-hoverColor hover:font-semibold py-4 px-8">
              <h2>Looking for experts in Virtual Assistance</h2>
            </button>
          </Link>
          <Link to="/register/freelancer">
            <button className="border rounded-lg hover:bg-hoverColor hover:font-semibold py-4 px-8">
              <h2>Looking for work as a Virtual Assistant</h2>
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Register;
