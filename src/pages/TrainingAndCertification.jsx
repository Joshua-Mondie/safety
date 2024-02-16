// import React from 'react'
import Header from "./Header";
import bgimg1 from "../assets/trainingbg2.jpeg";
import { useState, useEffect } from "react";
// import { MdLocationOn } from "react-icons/md";

const TrainingAndCertification = () => {
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
    <div>
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
             Training & Certification
            </p>
            <p className="text-white ml-48 mt-5 text-lg">Home / Training & Certification</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingAndCertification