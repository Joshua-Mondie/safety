// import React from 'react'
// import { useState, useEffect } from "react";
import Header from "./Header";
// import bgimg1 from "../assets/disciplinarybg.png";
import Footer from "./Footer";
import MediumNavBar from "./MediumNavBar";

const DisciplinaryCommitee = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  // const backgroundImage = `url(${bgimg1})`;

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
  return (
    <div className="grid ">
      <div className="w-full block md:hidden h-80" 
      // style={{ backgroundImage }}
      >
        <MediumNavBar />
      </div>

      <div className="hidden md:block">
        <div className=" h-[35rem]  bg-cover" 
        // style={{ backgroundImage }}
        >
          <div
            className={`w-full  shadow-md`}
          >
            <Header />
          </div>
        </div>
        <div className="flex  justify-center -mt-[24rem] mb-40  z-0">
          <div>
            <p className="mt-32 font-custom text-5xl text-white font-bold">
              Disciplinary Commitee
            </p>
            <p className="text-white ml-28 text-lg">
              Home / Disciplinary Commitee
            </p>
          </div>
        </div>
      </div>
      <div className="mt-40 mb-32  border">
        <div className="text-2xl md:text-4xl flex justify-center mb-20">
          The Disciplinary Rules
        </div>
        <div className="grid md:relative   w-full  md:grid-cols-2 gap-10 justify-center md:px-40 mt-10 font-custom mb-40">
          <div className=" flex gap-3  text-wrap  px-4 md:px-0">
            {" "}
            <span className="h-8 w-20 md:h-9 md:w-14  flex justify-center items-center bg-green-400 text-white rounded-full ">
              1
            </span>
            Sections 13 and 14 of the Institute of Safety Professionals of
            Nigeria Act, 2014, are hereby applicable.
          </div>
          <div className="flex gap-3 text-wrap px-4 md:px-0">
            {" "}
            <span className="h-8 w-20  md:h-9 md:w-14  flex justify-center items-center bg-green-400 text-white rounded-full ">
              2
            </span>
            All ISPON members are required to comply with Code of Conduct made
            by the Governing Board.
          </div>
          <div className="flex gap-3 px-5 md:px-0">
            {" "}
            <span className="h-8 w-52  md:h-9 md:w-32  flex justify-center items-center bg-green-400 text-white rounded-full  ">
              3
            </span>
            Any member who contravenes the Code of Conduct or who behaves in a
            manner which amounts to unacceptable professional conduct or which
            is prejudicial to the interests of the Institute shall be liable to
            disciplinary action.
          </div>
          <div className="flex gap-3 px-8 text-justify md:px-0">
            {" "}
            <span className="h-9 w-24  flex justify-center items-center bg-green-400 text-white rounded-full  ">
              4.
            </span>
            The Disciplinary Committee shall have the duty to consider and
            determine cases of professional misconduct referred to it, as
            provided in section 13 of ISPON Act 2014.
          </div>
          <div className="px-8 md:px-0 md:ml-[28rem] md:absolute md:w-[32rem] md:mt-56 flex gap-3">
            {" "}
            <span className="h-9 w-20  flex justify-center items-center bg-green-400 text-white rounded-full  ">
              5.
            </span>
            The Committee shall consist of a Chairman and four other members of
            the Board of the Institute appointed by the Board.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DisciplinaryCommitee;
