// import React from 'react'
import Header from "./Header";
import bgimg1 from "../assets/contactimg5.avif";
import { useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { contact } from "../data2";

const ContactUs = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundImage = `url(${bgimg1})`;
  return (
    <div className="grid">
      <div className="mb-20">
        <div className=" h-[35rem]   bg-cover" style={{ backgroundImage }}>
          <div
            className={`w-full  shadow-md  ${
              isScrolled ? "fixed top-[-3rem] z-10 bg-white" : ""
            }`}
          >
            {/* <div className=" absolute h-full w-full bg-gray-400 opacity-45 flex items-center text-white font-semibold text-lg">
              hello
            </div> */}
            <Header />
          </div>
        </div>
        <div className="flex  justify-center -mt-[24rem] mb-40  z-0">
          <div>
            <p className="mt-32 font-custom text-6xl text-white font-bold">
              Contact Us
            </p>
            <p className="text-white ml-16 mt-5 text-lg">Home / Contact Us</p>
          </div>
        </div>
      </div>
      <div className="px-6 mt-20 md:mb-64 grid lg:grid-cols-2 lg:px-72  gap-y-6   gap-x-[-96rem] ">
        {contact.map((contact, index) => (
          <div
            key={index}
            className=" mx-0 relative overflow-hidden  flex flex-col duration-500 transition ease-in-out font-custom text-white  items-center justify-center gap-y-0 bg-green-600  w-[25rem] shadow-2xl h-[14rem] hover:bg-white group"
          >
            <span className=" text-xl -top-11 rounded-full -right-10 absolute duration-500   bg-black  flex items-center pl-8 pt-8 h-28 w-28 group-hover:bg-green-600 group-hover:text-white">
              {contact.icon}
            </span>
            <span className="font-bold text-3xl group-hover:text-black duration-500 ">
              {contact.text}
            </span>
            <span className=" font-extralight text-md text-center mt-5 group-hover:text-black  duration-500">
              {contact.text2}
            </span>
          </div>
        ))}
      </div>
      <div className="border py-6 md:py-0 mt-40 md:mt-0 mx-4 md:mx-0 bg-gray-800 border-black font-custom">
        <div className="px-5  h-[16rem]  text-gray-300 md:flex items-center justify-around">
          <div className="   md:mt-20 px-4 md:p-0 grid grid-cols-1  gap-y-5 ">
            <span className="flex gap-4  hover:text-white">
              <span className="text-green-500 mt-1 text-2xl ">
                <MdLocationOn />
              </span>
              <span className="">
                Dominic Aigbogun House <br /> 46 Ikotun/Isolo Road by
                Bolorunpelu Bus-stop Ikotun, <br /> Lagos State Nigeria.
              </span>
            </span>
            <span className="flex gap-4 hover:text-white">
              <span className="text-green-500 mt-1 text-xl">
                <FaPhoneAlt />
              </span>
              +234 703 762 8888 & +234 813 629 4444
            </span>
            <span className=" flex gap-4 hover:text-white ">
              <span className="text-green-500 mt-1 text-xl">
                <MdEmail />
              </span>
              <span className=" text-sm md:text-base">
                info@safetyprofessionals.gov.ng <br />
                <span className="absolute md:relative left-9 md:left-0 md:mt-0 mt-2   ">
                  President@safetyprofessionals.gov.ng
                </span>
              </span>
            </span>
          </div>
          <div className="  gap-y-5 mt-20 hidden md:grid ">
            <span className="hover:text-green-600 ">Cookie policy</span>
            <span className="hover:text-green-600 ">
              Membership certificate
            </span>
            <span className="hover:text-green-600 ">Training certificate</span>
            <span className="hover:text-green-600 ">Forums</span>
            <span className="hover:text-green-600 ">Give us your feedback</span>
          </div>
        </div>
        <div className=" text-gray-300 hidden md:block  w-full  justify-center mt-10  md:mt-10 ">
          © 2024 Institute of Safety Professionals of Nigeria | All Rights
          Reserved
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
