import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const testimonials = [
  {
    id: 1,
    author: "John Doe",
    role: "Client",
    text: "I found the perfect virtual assistant for my project. Very professional and efficient!",
  },
  {
    id: 2,
    author: "Jane Smith",
    role: "Client",
    text: "The virtual assistants here are top-notch. They helped me complete my tasks on time.",
  },
  {
    id: 3,
    author: "Michael Johnson",
    role: "Freelancer",
    text: "As a freelancer, this platform has provided me with great opportunities to work with amazing clients.",
  },
  {
    id: 4,
    author: "Emily Brown",
    role: "Freelancer",
    text: "I've had the pleasure of collaborating with wonderful clients through this platform.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 w-full">
      <div className="w-full mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          What Our Clients and Freelancers Say
        </h2>
        <div className="hidden md:flex max-w-4xl gap-10 mx-auto">
          <Carousel
            autoPlay
            interval={4000}
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showArrows={true}
            stopOnHover={false}
            className="grid place-items-center"
            emulateTouch
            swipeable
            centerMode
            centerSlidePercentage={33.33}
            renderIndicator={false}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="m-2 p-2 rounded-lg border-2 shadow-lg h-full"
              >
                <p className="text-lg mb-4">{testimonial.text}</p>
                <p className="text-gray-600">
                  - {testimonial.author}, {testimonial.role}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="flex flex-col md:hidden">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="m-2 p-2 rounded-lg border-2 shadow-lg h-full"
            >
              <p className="text-lg mb-4">{testimonial.text}</p>
              <p className="text-gray-600">
                - {testimonial.author}, {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
