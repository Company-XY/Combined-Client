import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <main id="Home" className="px-10 py-5 w-full">
        <section className="px-2">
          <div className="text-center">
            <h2 className="font-semibold text-3xl">Re-Inventing freelancing</h2>
            <p className="leading-8 font-medium text-xl">
              Join us today, and experience a seamless and rewarding journey
              where freelancers and clients come together to achieve excellence.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-2 text-center py-5">
          <div className=" text-center cursor-pointer hover:font-semibold">
            <p className="bg-bgColor">
              <Link to="/register/client">Sign up now as a client</Link>
            </p>
          </div>
          <div className=" text-center cursor-pointer hover:font-semibold">
            <p className=" bg-bgColor">
              <Link to="/register/freelancer">Sign up now as a freelancer</Link>
            </p>
          </div>
        </section>
        <section className="text-center my-5">
          <p> Div With Image</p>
        </section>
        <section className="px-10 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 px-4">
            <div className=" m-2 p-2 rounded-lg shadow-lg w-4/5 h-[200px] hover:scale-105">
              <div className="text-center p-3">
                <img src="" alt="_image" />
              </div>
              <h2 className="font-semibold text-xl text-center py-2">
                Efficiency
              </h2>
              <p className="text-lg text-center p-2">
                Our virtual assistants are efficient and cost-effective, helping
                you save time and money on routine tasks so you can focus on
                what matters most.
              </p>
            </div>
            <div className=" m-2 p-2 rounded-lg shadow-lg w-4/5 h-[200px] hover:scale-105">
              <div className="text-center p-3">
                <img src="" alt="_image" />
              </div>
              <h2 className="font-semibold text-xl text-center py-2">
                Diverse Opportunities
              </h2>
              <p className="text-lg text-center p-2">
                Access a wide range oftasks and projects across various
                industries, allowing you to leverage your skills and expand your
                portfolio.
              </p>
            </div>
            <div className=" m-2 p-2 rounded-lg shadow-lg w-4/5 h-[200px] hover:scale-105">
              <div className="text-center p-3">
                <img src="" alt="_image" />
              </div>
              <h2 className="font-semibold text-xl text-center py-2">
                Profile Showcase
              </h2>
              <p className="text-lg text-center p-2">
                Create a professional profile that highlights your skills,
                experience, and accomplishments. Your profile is your digital
                business card, attracting clients looking for your specific
                expertise.
              </p>
            </div>
            <div className=" m-2 p-2 rounded-lg shadow-lg w-4/5 h-[200px] hover:scale-105">
              <div className="text-center p-3">
                <img src="" alt="_image" />
              </div>
              <h2 className="font-semibold text-xl text-center py-2">
                Secure Payments
              </h2>
              <p className="text-lg text-center p-2">
                Rest assured that your hard work will be compensated fairly. We
                hold payments in escrow, ensuring that you get paid for the
                services you provide.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
