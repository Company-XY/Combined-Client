import Header from "../components/Header";
import Footer from "../components/Footer";
import Routers from "../routes/routers";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-grow mt-10 pt-5">
        <Routers />
      </section>

      <Footer />
    </div>
  );
};

export default Layout;
