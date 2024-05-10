import { useState } from "react";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your signup logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gray-900 relative py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="px-4 md:px-10 py-6 md:py-10 md:h-screen-1/3 bg-green-600 w-full md:flex justify-center items-center md:gap-10 md:-mt-4 absolute top-0 left-0 right-0">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl lg:text-5xl text-white font-bold font-custom mb-4 md:mb-2">
              Stay Connected
            </h2>
            <p className="text-white text-base md:text-lg">
              Get updates on our latest news and events.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center"
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full md:w-64 lg:w-80 px-4 py-3 mb-4 md:mb-0 mr-0 md:mr-4 bg-green-600 text-white border-b border-white focus:outline-none placeholder-white placeholder-opacity-75"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full md:w-64 lg:w-80 px-4 py-3 mb-4 md:mb-0 mr-0 md:mr-4 bg-green-600 text-white border-b border-white focus:outline-none placeholder-white placeholder-opacity-75"
              placeholder="Your Email"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black rounded-full font-custom hover:bg-black hover:text-white transition duration-300 ease-in-out focus:outline-none"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
