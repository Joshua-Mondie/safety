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
    <div className=" md:h-[80vh]  bg-gray-900 relative ">
      <div className=" w-[90vw] py-10 md:py-0 px-5  md:h-[30vh] mx-4 bg-green-600 md:mx-10 md:w-[85rem] md:flex justify-center items-center md:gap-10 -mt-28 absolute">
        <h2 className=" font-semibold  text-4xl text-white font-custom mb-5 md:mb-0">
          Stay Connected
        </h2>
        <form
          onSubmit={handleSubmit}
          className="md:flex  gap-10 max-w-[68rem] items-center justify-center"
        >
          <div className="mb-8 md:mb-4">
            {/* <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name
            </label> */}
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="md:w-[20rem] border-b px-4 text-white py-2 focus:outline-none select-none placeholder:text-white  bg-green-600 placeholder-italic"
              placeholder=" Your Name *"
              required
            />
          </div>
          <div className="mb-10 md:mb-4">
            {/* <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label> */}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="md:w-[20rem] border-b px-4 text-white py-2 focus:outline-none select-none placeholder:text-white  bg-green-600 placeholder-italic"
              placeholder="Your Email *"
              required
            />
          </div>
          <button
            type="submit"
            className=" -mt-4 text-black bg-white px-10 py-3 w-[10rem] rounded-full focus:outline-none font-custom hover:bg-black hover:text-white duration-500"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className=" border-white h-full  md:mt-0 ">
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
