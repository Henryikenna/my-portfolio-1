// import React from "react";

// const Contact = () => {
//   return (
    
//     <div name="contact" className=" w-full h-dvh bg-gradient-to-b from-black via-gray-950 to-gray-800 p-4 text-white">
//       <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//         <div className=" pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
//           <p className=" py-6">Submit the form below to get in touch with me.</p>
//         </div>

//         <div className=" flex justify-center items-center">
//           <form  action="https://getform.io/f/eapddkra" method="POST" className=" flex flex-col w-full md:w-1/2">
//             <section className="flex flex-col gap-y-4">
//             <input
//               className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               name="name"
//               type="text"
//               placeholder="Please enter your name"
//             />
//             <input
//               className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               name="email"
//               type="email"
//               placeholder="Please enter your email"
//             />

//             <textarea placeholder="Please enter your message" className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" name="message" rows="10"></textarea>
//             </section>

//             <button className="bg-gradient-to-b from-gray-800 via-slate-900 to-gray-950 cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-white">Let's Talk</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;




import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = {
      name: formData.name === "",
      email: formData.email === "" || !validateEmail(formData.email),
      message: formData.message === ""
    };
    setErrors(newErrors);

    // Check if there are no errors
    if (!Object.values(newErrors).some((error) => error)) {
      // Form is valid, submit the form
      e.target.submit();
    }
  };

  return (
    <div name="contact" className="w-full h-dvh bg-gradient-to-b from-black via-gray-950 to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-4 md:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-5 md:py-6">Submit the form below to get in touch with me.</p>
        </div>

        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} action="https://getform.io/f/eapddkra" method="POST" className="flex flex-col w-full md:w-1/2">
            <section className="flex flex-col gap-y-4">
              <input
                className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
                name="name"
                type="text"
                placeholder="Please enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                name="email"
                type="email"
                placeholder="Please enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${errors.message ? 'border-red-500' : ''}`}
                name="message"
                placeholder="Please enter your message"
                rows="10"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </section>

            <button className="bg-gradient-to-b from-gray-800 via-slate-900 to-gray-950 cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-white">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

