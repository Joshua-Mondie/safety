// import React from 'react'
// import { useState, useEffect } from "react";
import Header from "./Header";
import bgimg1 from "../assets/objectivesbg.png";
import Footer from "./Footer";
import { instituteFunctions } from "../data2";
import MediumNavBar from "./MediumNavBar";

const ObjectivesAndFunctions = () => {
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
      <div className="w-full block md:hidden h-80" style={{ backgroundImage }}>
        <MediumNavBar />
      </div>

      <div className="mb-20 hidden md:block">
        <div className=" h-[35rem]  bg-contain bg-no-repeat" style={{ backgroundImage }}>
          <div
            className={`w-full  shadow-md`}
          >
            <Header />
          </div>
        </div>
        <div className="flex  justify-center -mt-[24rem] mb-40  z-0">
          <div>
            <p className="mt-32 mb-5 font-custom text-5xl text-white font-bold">
              Objectives and Functions
            </p>
            <p className="text-white ml-36  text-lg">
              Home / Objectives and Functions
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-80 md:mt-0 md:px-0 px-4 w-full">
        <h1 className="   flex items-center justify-center  font-custom md:text-4xl text-xl">
          Objectives of the Institute
        </h1>
        <div className="grid gap-y-10 md:gap-y-0 md:grid-cols-2 md:gap-10 md:px-40 mt-10 ">
          <div className="flex gap-4">
            <span className="h-8 w-16 md:h-10 md:w-10 flex justify-center items-center rounded-full bg-green-500 text-white">
              1
            </span>
            <h1 className="font-custom text-slate-600 text-base">
              Organize and Provide Training in the area of safety management
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="h-8 w-36 md:h-10 md:w-[8rem] flex justify-center items-center rounded-full bg-green-500 text-white">
              2
            </div>
            <h1 className="font-custom text-slate-600 text-base">
              Do all such things as may be necessary to promote the advancement
              of safety profession in both the public and private sector of the
              economy
            </h1>
          </div>
          <div className="flex gap-6 md:absolute md:mt-32 md:w-[40rem] md:ml-52">
            <div className="h-8 w-52   md:h-10 md:w-[8rem] flex justify-center items-center rounded-full bg-green-500 text-white">
              3
            </div>
            <h1 className="font-custom text-slate-600 text-base">
              In collabotation with relevant government agencies, set standards
              of practice and determine the knowledge and skils to be acquired
              by persons seeking to register and practice safety professionals
              to improve on such standards from time to time.
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="border h-[20rem] mt-64 mb-52">
        <h1>image here</h1>
      </div> */}

      <div className="mt-40 md:mt-64 mb-52 flex justify-center items-center px-10">
        <div className="">
          <h1 className="text-lg  text-center md:text-4xl font-custom justify-center flex mb-16">
            Functions and Power of the Institute
          </h1>
          <div className="grid md:grid-cols-3 gap-16">
            {instituteFunctions.map((institute, index) => (
              <div key={index} className="flex gap-x-4 ">
                <span className="">{institute.num}</span>
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
