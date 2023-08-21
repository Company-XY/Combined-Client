import Footer from "../components/Home/customFooter";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import CTASection from "../components/Home/CTA";
import NewsletterSection from "../components/Home/Newsletter";
import VirtualAssistanceTypes from "../components/Home/jobTypes";
import OnboardingProcess from "../components/Home/onboarding";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <div
      id="Home"
      className="mt-[-4px] pt-10 px-10 bg-cover bg-center flex flex-col justify-between items-center w-full min-h-screen"
    >
      <Hero />
      <About />
      <Services />
      <VirtualAssistanceTypes />
      <OnboardingProcess />
      <CTASection />
      <Testimonials />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;
