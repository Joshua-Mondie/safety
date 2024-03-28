// import React from 'react'
// import { useState, useEffect } from "react";
import Header from "../Header";
// import bgimg1 from "../../assets/eventsbg.png";
import Footer from "../Footer";
import { event } from "./event";
import MediumNavBar from "../MediumNavBar";

const Events = () => {
  // const backgroundImage = `url(${bgimg1})`;
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
  return (
    <div className="md:grid w-full">
      <div className="w-full block md:hidden h-80 eventsbg"
      //  style={{ backgroundImage }}
       >
        <MediumNavBar />
      </div>
      <div className="mb-20">
        <div className="hidden md:block h-[30rem]  bg-cover eventsbg" 
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
            <p className="mt-32 font-custom text-5xl text-white font-bold mb-4">
              Events
            </p>
            <p className="text-white ml-4 text-lg">Home / Events</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-custom font-bold text-2xl w-full">ANNUAL GENERAL MEETING 2023(AGM)</div>
      <div className="mt-20 mb-48 grid md:grid-cols-4 px-10 ">
        {
          event.map((event,index)=>(
            <div key={index}>
              <img src={event.img} alt="" className="my-2 md:my-0 md:h-[15rem] w-[28rem]"/>
            </div>
          ))
        }

      </div>
      <Footer />
    </div>
  );
};

export default Events;
