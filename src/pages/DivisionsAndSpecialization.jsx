// import React from 'react'
// import { useState, useEffect } from "react";
// import { names } from "../data";
import Header from "./Header";
import bgimg1 from "../assets/bg5.jpeg";
import "./pages.css";
import Footer from "./Footer";
// import { Link } from "react-router-dom";

import { divisionsandspecialization } from "../data2";
import MediumNavBar from "./MediumNavBar";

const DivisionsAndSpecialization = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 100) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const backgroundImage = `url(${bgimg1})`;
  return (
    <div className="grid">
      <div className="mb-20">
      <div className="w-full block md:hidden h-80" style={{ backgroundImage }}>
        <MediumNavBar />
      </div>

        <div
          className="hidden md:block h-[35rem]  bg-cover"
          style={{ backgroundImage }}
        >
          <div
            className={`w-full  shadow-md `}
          >
            <Header />
          </div>
        </div>
        <div className="flex  justify-center -mt-[24rem] mb-40  z-0">
          <div>
            <p className="mt-32 font-custom text-5xl text-white font-bold">
              Divisions & Specialization
            </p>
            <p className="text-white ml-28 mt-5 text-lg">
              Home / Divisions & Specialization
            </p>
          </div>
        </div>
      </div>
      <div className="px-20 mb-64 md:px-40 grid md:grid-cols-5 gap-10">
        {divisionsandspecialization.map((division, index) => (
          <div key={index} className=" border rounded shadow">
            {/* <span>{division.num}</span> */}
            <p className="px-4 py-4 md:py-0 text-center font-custom text-sm justify-center items-center md:px-2 flex md:text-sm font-semibold  ">
              {division.text}
            </p>
          </div>
        ))}
        ffffff
      </div>
      <Footer />
    </div>
  );
};

export default DivisionsAndSpecialization;
