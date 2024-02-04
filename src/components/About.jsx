import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-dvh bg-gradient-to-b from-gray-800 via-gray-950 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className=" text-base mt-3 md:mt-12 md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          autem, consequuntur corporis delectus doloremque dolorum earum eos
          expedita facere fugiat fugit harum impedit ipsa itaque, iusto
          laudantium maiores maxime mollitia nobis nihil numquam odit officia
          optio pariatur perferendis perspiciatis quaerat quasi
        </p>

        <br />

        <p className=" text-base md:text-xl">
          This is a simple application created using the MERN stack. The main
          purpose of this project isThis is a simple application to demonstrate
          how to use the Google Maps JavaScript API with React.js. quasi quasi
          quasi quasi quasi quasi quasi quasi quasi quasi quasi quasi quasi
          quasi quasi quasi quasi
        </p>
      </div>
    </div>
  );
};

export default About;
