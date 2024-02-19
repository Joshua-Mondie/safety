// import React from 'react'
import { useState, useEffect } from "react";
import Header from "../../Header";
import bgimg1 from "../../../assets/bg5.jpeg";
import kwarabranchA from "../../../assets/kwarabranchA.png";
import kwarabranchB from "../../../assets/kwarabranchB.png";
// import kwarabranchC from "../../../assets/kwarabranchC.png";

const KwaraStateBranch = () => {
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
                Kwara State  Branch
            </p>
            <p className="text-white ml-20 text-lg">Home / Branches / Kwara State Branch</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 font-bold  mt-20  mx-32">
        <div className="px-96 text-center">INSTITUTE OF SAFETY PROFESSIONALS OF NIGERIA  <br /> KWARA STATE BRANCH <br /> TRAINING PROGRAMME FOR THE YEAR 2024</div>
        <div className=" w-[70rem] h-[80rem]  ">
          <img src={kwarabranchA} alt="" className=" w-full h-full" />
        </div>
        <span className=" w-[70rem] h-[80rem]  ">
          <img src={kwarabranchB} alt="" className=" w-full h-full" />
        </span>
        <div className=" w-[70rem]  ">
            <div className=" px-40 font-bold">

            <h1>ISPON, KWARA STATE BRANCH TRAINING VENUE</h1>
            <h1>New Covenant Hostel beside High Court, Fate Road, ILorin, Kwara State.</h1>
            <div className="mt-8">
                <h1>Ben Modebe</h1>
                <h1>Kwara State Branch Coordinator</h1>
                <h1>Isponkwara@gmail.com Cc: benmodesty@yahoo.co.uk <br /> 0802303277</h1>

            </div>
            </div>
          {/* <img src={kwarabranchC} alt="" className=" w-full h-full" /> */}
        </div>
      </div>
    </div>
  )
}

export default KwaraStateBranch