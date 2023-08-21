import React from "react";

const VirtualAssistanceTypes = () => {
  const assistanceTypes = [
    "Administrative Support",
    "Social Media Management",
    "Email Management",
    "Data Entry",
    "Content Writing",
    "Graphic Design",
    "Research and Analysis",
    "Customer Support",
    "Calendar Management",
    "Travel Arrangements",
    "Bookkeeping and Accounting",
    "Website Maintenance",
    "Project Coordination",
    "Event Planning",
    "Online Research",
    "Translation Services",
    "Technical Support",
  ];

  return (
    <section className="virtual-assistance-section py-12 w-full rounded-xl">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Types of Jobs on Our Platform
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Discover the range of tasks that virtual assistants can handle to
          support you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {assistanceTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-md flex items-center justify-center transition transform hover:bg-blue-400 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <p className="text-gray-700">{type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualAssistanceTypes;
