// import React from 'react'
import { useState, useEffect } from "react";
import Header from "../../Header";
import bgimg1 from "../../../assets/bg5.jpeg";
import crossriverstatebranchA from "../../../assets/crossriverstatebranchA.png";
import crossriverstatebranchB from "../../../assets/crossriverstatebranchB.png";
// import crossriverstatebranchC from "../../../assets/crossriverstatebranchC.png";

const CrossRiverStateBranch = () => {
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
                Cross River State  Branch
            </p>
            <p className="text-white ml-20 text-lg">Home / Branches / Cross River State Branch</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  mt-20    mx-56">
        {/* <div className="px-96 text-center">INSTITUTE OF SAFETY PROFESSIONALS OF NIGERIA  <br /> KWARA STATE BRANCH <br /> TRAINING PROGRAMME FOR THE YEAR 2024</div> */}
        <div className=" w-[60rem] h-[50rem]  ">
          <img src={crossriverstatebranchA} alt="" className=" w-full h-full" />
        </div>
        <span className=" w-[60rem] h-[50rem]   ">
          <img src={crossriverstatebranchB} alt="" className=" w-full h-full" />
        </span>
        <div className=" w-[60rem]  mb-4 ml-10  ">
            <span className=" ">
                <h1>Bank: First Bank PLC</h1>
                <h1>Account Name: Institute of Safety Professionals of Nigeria</h1>
                <h1>Account Number 2023427327</h1>
            </span>
            
          {/* <img src={crossriverstatebranchC} alt="" className=" w-full h-full" /> */}
        </div>
      </div>
    </div>
  )
}

export default CrossRiverStateBranch