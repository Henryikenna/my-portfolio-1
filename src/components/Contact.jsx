import React from "react";

const Contact = () => {
  return (
    <div name="contact" className=" w-full h-dvh bg-gradient-to-b from-black via-gray-950 to-gray-800 p-4 text-white">
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className=" pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className=" py-6">Submit the form below to get in touch with me.</p>
        </div>

        <div className=" flex justify-center items-center">
          <form  action="https://getform.io/f/eapddkra" method="POST" className=" flex flex-col w-full md:w-1/2">
            <section className="flex flex-col gap-y-4">
            <input
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              name="name"
              type="text"
              placeholder="Please enter your name"
            />
            <input
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              name="email"
              type="email"
              placeholder="Please enter your email"
            />

            <textarea placeholder="Please enter your message" className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" name="message" rows="10"></textarea>
            </section>

            <button className="bg-gradient-to-b from-gray-800 via-slate-900 to-gray-950 cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-white">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
