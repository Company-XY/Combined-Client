const CTASection = () => {
  return (
    <section className="cta-section bg-blue-500 py-12 text-white w-full rounded-xl m-2">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Join our platform today and experience the benefits of hiring or
          working as a freelancer.
        </p>
        <button className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
