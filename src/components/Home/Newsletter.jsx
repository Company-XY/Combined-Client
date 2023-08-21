import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      // logic to send the email to our newsletter service
      console.log("Email submitted:", email);
      setIsValidEmail(true);
      setEmail("");
    } else {
      setIsValidEmail(false);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="bg-opacity-50 py-12 w-full rounded-xl">
      <div className="mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Stay up-to-date with the latest news and offers by subscribing to our
          newsletter.
        </p>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className={`w-full md:w-1/2 px-4 py-2 rounded-lg ${
              isValidEmail ? "border" : "border-red-500"
            } focus:outline-none focus:ring focus:border-blue-500 mb-2`}
          />
          {!isValidEmail && (
            <p className="text-red-500 text-sm">Please enter a valid email.</p>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
