import { useState, useEffect } from "react";
import { BsArrowUpShort } from "react-icons/bs";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-gray-800 text-white hover:bg-blue-600 ${
        isVisible ? "visible" : "invisible"
      } transition-all duration-300 ease-in-out`}
    >
      <BsArrowUpShort size={20} />
    </button>
  );
};

export default BackToTopButton;
