// import React from 'react'
import { useState, useEffect } from "react";
import Header from "./Header";
import bgimg1 from "../assets/bg5.jpeg";
import Footer from "./Footer";
import { instituteFunctions } from "../data2";

const ObjectivesAndFunctions = () => {
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
              Objectives and Functions
            </p>
            <p className="text-white ml-20 text-lg">
              Home / Objectives and Functions
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="  flex items-center justify-center font-custom text-4xl">
          Objectives of the Institute
        </h1>
        <div className="grid grid-cols-2 gap-10 px-40 mt-20">
          <div className="flex gap-4">
            <span className=" h-10 w-10 flex justify-center items-center rounded-full bg-green-500 text-white">
              1
            </span>
            <h1 className="font-custom text-slate-600 text-base">
              Organize and Provide Training in the area of safety management
            </h1>
          </div>
          <div className="flex gap-4">
            <span className=" h-10 w-20 flex justify-center items-center rounded-full bg-green-500 text-white">
              2
            </span>
            <h1 className="font-custom text-slate-600 text-base">
              Do all such things as may be necessary to promote the advancement
              of safety profession in both the public and private sector of the
              economy
            </h1>
          </div>
          <div className="flex gap-6 absolute mt-32 w-[40rem] ml-52">
            <span className="h-10 w-[8rem] flex justify-center items-center rounded-full bg-green-500 text-white">
              3
            </span>
            <h1 className="font-custom text-slate-600 text-base">
              In collabotation with relevant government agencies, set standards
              of practice and determine the knowledge and skils to be acquired
              by persons seeking to register and practice safety professionals
              to improve on such standards from time to time.
            </h1>
          </div>
        </div>
      </div>
      <div className="border h-[20rem] mt-64 mb-52">
        <h1>image here</h1>
      </div>

      <div className=" mb-52 flex justify-center items-center px-10">
        <div className="">
          <h1 className="text-4xl font-custom justify-center flex mb-16">
            Functions and Power of the Institute
          </h1>
          <div className="grid grid-cols-3 gap-16">
            {instituteFunctions.map((institute, index) => (
              <div key={index} className="flex gap-x-4 ">
                <span className="">
                  {institute.num}
                </span>
                <h1 className="font-custom text-slate-600">{institute.text}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ObjectivesAndFunctions;
