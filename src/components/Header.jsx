import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main className="h-fit w-full flex justify-between py-2 px-5">
      <section className="py-2">
        <span className="font-semibold grid place-items-center">
          <Link to="/" className="cursor-pointer">
            Assist Africa
          </Link>
        </span>
      </section>
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
    </main>
  );
};

export default Header;
