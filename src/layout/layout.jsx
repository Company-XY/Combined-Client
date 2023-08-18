import Header from "../components/Header";
import Footer from "../components/Footer";
import Routers from "../routes/routers";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-grow overflow-y-auto">
        <Routers />
      </section>

      <Footer />
    </div>
  );
};

export default Layout;
