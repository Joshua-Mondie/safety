// import React from 'react'
import { useState, useEffect } from "react";
import Header from "./Header";
import bgimg1 from "../assets/bg5.jpeg";
import Footer from "./Footer";

const DisciplinaryCommitee = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const backgroundImage = `url(${bgimg1})`;

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
  return (
    <div className="grid">
      <div className="">
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
              Disciplinary Commitee
            </p>
            <p className="text-white ml-28 text-lg">
              Home / Disciplinary Commitee
            </p>
          </div>
        </div>
      </div>
      <div className="mt-40 mb-32 ">
        <div className=" text-4xl flex justify-center mb-20">
          The Disciplinary Rules
        </div>
        <div className="grid relative  grid-cols-2 gap-10 justify-center px-40 mt-10 font-custom mb-40">
          <span className=" leading-relaxed ">
            {" "}
            <span className="px-3 py-2 justify-center items-center bg-green-400 text-white rounded-full">
              1.
            </span>
            Sections 13 and 14 of the Institute of Safety Professionals of
            Nigeria Act, 2014, are hereby applicable.
          </span>
          <span>
            {" "}
            <span className=" px-3 py-2 bg-green-400 text-white rounded-full">
              2.
            </span>
            All ISPON members are required to comply with Code of Conduct made
            by the Governing Board.
          </span>
          <span>
            {" "}
            <span className=" px-3 py-2 bg-green-400 text-white rounded-full">
              3.
            </span>
            Any member who contravenes the Code of Conduct or who behaves in a
            manner which amounts to unacceptable professional conduct or which
            is prejudicial to the interests of the Institute shall be liable to
            disciplinary action.
          </span>
          <span className="">
            {" "}
            <span className=" px-3 py-2 bg-green-400 text-white rounded-full">
              4.
            </span>
            The Disciplinary Committee shall have the duty to consider and
            determine cases of professional misconduct referred to it, as
            provided in section 13 of ISPON Act 2014.
          </span>
          <span className="ml-64 absolute w-[32rem] mt-56 "> 
            {" "}
            <span className=" px-3 py-2  bg-green-400 text-white rounded-full">
              5.
            </span>
            The Committee shall consist of a Chairman and four other members of
            the Board of the Institute appointed by the Board.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DisciplinaryCommitee;
