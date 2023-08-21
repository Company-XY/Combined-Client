const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-[-10px] flex items-center justify-center h-fit py-2 w-full text-gray-200 bg-gray-800">
      <p>
        &copy; {year}. <span className="font-semibold">Assist Africa.</span> All
        rights reserved
      </p>
    </div>
  );
};

export default Footer;
