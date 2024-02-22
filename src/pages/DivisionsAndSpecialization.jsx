// import React from 'react'
import { useState, useEffect } from "react";
// import { names } from "../data";
import Header from "./Header";
import bgimg1 from "../assets/bg5.jpeg";
import "./pages.css";
import Footer from "./Footer";
// import { Link } from "react-router-dom";

import { divisionsandspecialization } from "../data2";

const DivisionsAndSpecialization = () => {
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
        <div className=" h-[35rem]  bg-cover" style={{ backgroundImage }}>
          <div
            className={`w-full  shadow-md ${
              isScrolled ? "fixed top-[-3rem] z-10 bg-white" : ""
            }`}
          >
            <Header />
          </div>
        </div>
        <div className="flex  justify-center -mt-[24rem] mb-40  z-0">
          <div>
            <p className="mt-32 font-custom text-5xl text-white font-bold">
              Divisions & Specialization
            </p>
            <p className="text-white ml-28 mt-5 text-lg">Home / Divisions & Specialization</p>
          </div>
        </div>
      </div>
      <div className="mb-64 px-40 grid grid-cols-5 gap-10">
        {divisionsandspecialization.map((division, index) => (
          <div key={index} className=" border rounded shadow">
            {/* <span>{division.num}</span> */}
            <p className=" text-center justify-center px-2 flex text-sm font-semibold ">{division.text}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default DivisionsAndSpecialization;
