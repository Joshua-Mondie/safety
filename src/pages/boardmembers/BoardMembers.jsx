// import React from 'react'
import Header from "../Header";
import bgimg1 from "../../assets/bg5.jpeg";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { boardmembers } from "./boardmembersdata";
import MediumNavBar from "../MediumNavBar";

const BoardMembers = () => {
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
    <div className="grid bg-slate-100">
      <div className="w-full block md:hidden h-80" style={{ backgroundImage }}>
        <MediumNavBar />
      </div>

      <div className="mb-20 ">
        <div
          className=" hidden md:block h-[35rem]  bg-cover"
          style={{ backgroundImage }}
        >
          <div
            className={`w-full  shadow-md ${
              isScrolled ? "fixed z-10 bg-white" : ""
            }`}
          >
            <Header />
          </div>
        </div>
        <div className="flex  justify-center -mt-[24rem] mb-40  z-0">
          <div>
            <p className="mt-32 font-custom text-5xl text-white font-bold">
              Board Members
            </p>
            <p className="text-white ml-20 text-lg">Home / Board Members</p>
          </div>
        </div>
      </div>
      <div className="text-2xl mt-20 mb-10 font-medium flex justify-center md:text-4xl">
        <h1 className="">Meet Board Council</h1>
      </div>
      <div className="px-8 mt-5 md:mt-20 mb-48 grid md:grid-cols-3 md:px-52 gap-10">
        {boardmembers.map((members, index) => (
          <div key={index} className="w-64 shadow bg-white md:w-[19rem]">
            <img src={members.img} alt="" className="w-full" />
            <div className="py-8">
              <h1 className=" text-lg font-custom">{members.name}</h1>
              <h1 className="md:mx-28  text-xs md:text-sm font-custom text-green-500">
                {members.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BoardMembers;
