const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex items-center justify-center h-fit py-2 bg-gray-200">
      <p>
        &copy; {year}. <span className="font-semibold">Assist Africa.</span> All
        rights reserved
      </p>
    </div>
  );
};

export default Footer;
