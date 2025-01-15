import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback: "Henry is a fantastic developer with a keen eye for design.",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "Working with Henry was a pleasure. Highly recommended!",
    },
  ];

  return (
    <div
      name="testimonials"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-gray-950 to-black py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="text-white">
          <h2 className="text-4xl font-bold inline border-b-4 border-[#7F1F9A]">
            Testimonials
          </h2>
          <p className="py-6">What others say about me</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(({ id, name, feedback }) => (
            <div
              key={id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-white"
            >
              <p className="text-lg mb-4">{feedback}</p>
              <h3 className="text-xl font-bold">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 