const Services = () => {
  const servicesToClients = [
    {
      title: "Quality Freelancers",
      description:
        "Connect with a diverse pool of skilled freelancers ready to tackle your projects.",
    },
    {
      title: "Effortless Hiring",
      description:
        "Simplify the hiring process and find the right freelancers for your needs.",
    },
    {
      title: "Project Management",
      description:
        "Stay organized with tools to manage your projects, deadlines, and deliverables.",
    },
    {
      title: "Secure Payments",
      description:
        "Make payments with confidence, knowing that your transactions are secure.",
    },
  ];

  const servicesToFreelancers = [
    {
      title: "Job Opportunities",
      description:
        "Access a variety of freelance jobs spanning different industries and skills.",
    },
    {
      title: "Exposure and Networking",
      description:
        "Showcase your talents to a wide audience and build valuable connections.",
    },
    {
      title: "Portfolio Building",
      description:
        "Display your work and skills through a personalized portfolio.",
    },
    {
      title: "Flexible Work",
      description:
        "Enjoy the freedom to choose projects that align with your schedule and interests.",
    },
  ];

  return (
    <section id="services" className="services-section py-16 w-full">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-4">For Clients</h3>
            <p className="text-gray-600 mb-4">
              Browse our services to find the perfect freelancers for your
              projects.
            </p>
            <ul className="list-disc pl-6">
              {servicesToClients.map((service, index) => (
                <li key={index} className="mb-2">
                  <strong>{service.title}:</strong> {service.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-4">For Freelancers</h3>
            <p className="text-gray-600 mb-4">
              Explore job opportunities and grow your freelance career.
            </p>
            <ul className="list-disc pl-6">
              {servicesToFreelancers.map((service, index) => (
                <li key={index} className="mb-2">
                  <strong>{service.title}:</strong> {service.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
