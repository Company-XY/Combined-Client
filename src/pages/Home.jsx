import Footer from "../components/Home/customFooter";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";

const Home = () => {
  return (
    <div className="mt-10 pt-10 flex flex-col justify-between items-center w-full min-h-screen">
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
