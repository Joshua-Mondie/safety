// import React from 'react'
import Header from "../../Header";
import bgimg1 from "../../../assets/trainingbg2.jpeg";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

import { useState, useEffect } from "react";
import { SlBookOpen } from "react-icons/sl";

import Footer from "../../Footer";
import { coporatemembership } from "./coperatemembershipdata";

const CoporateMembership = () => {
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

  //   const backgroundImageTwo = `url(${bgimg2})`;

  return (
    <div className="grid">
      <div className="mb-20">
        <div className=" h-[35rem]   bg-cover" style={{ backgroundImage }}>
          <div
            className={`w-full  shadow-md  ${
              isScrolled ? "fixed top-[-3rem] z-10 bg-white" : ""
            }`}
          >
            {/* <div className=" absolute h-full w-full bg-gray-400 opacity-45 flex items-center text-white font-semibold text-lg">
              hello
            </div> */}
            <Header />
          </div>
        </div>
        <div className="flex  justify-center -mt-[24rem] mb-40  z-0">
          <div>
            <p className="mt-32 font-custom text-6xl text-white font-bold">
              Coporate Membership
            </p>
            <p className="text-white ml-48 mt-5 text-lg">
              Home / Coporate Membership
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-10 mb-52">
        <div className=" flex justify-center relative">
          <h1 className=" mx-72 font-custom  text-justify text-gray-700 font-normal text-lg">
            <span className="absolute left-[16rem] top-[-0.5rem] text-4xl text-gray-200">
              <RiDoubleQuotesL />
            </span>
            The Institute is established with functions and powers to establish
            and maintain a list of persons registered as Safety Professionals in
            Nigeria and publish from time to time those so registered...
            Consequently, a person who is not registered but holds himself or
            herself out as a registered safety professional is been guilty of an
            offence...{" "}
            <span className="absolute text-4xl text-gray-200 mt-[-0.5rem]">
              {" "}
              <RiDoubleQuotesR />{" "}
            </span>
            <br />
            <span className=" mt-2 text-sm text-gray-400 flex items-center gap-1  ">
              {" "}
              <span className="text-md text-red-500">
                <SlBookOpen />
              </span>{" "}
              Section 3(d) and 14(1) of ISPON Act 2014
            </span>
          </h1>
        </div>
        <h1 className="  mt-20 px-72 font-custom flex text-center text-gray-500 font-normal text-lg">
          Corporate membership is open to various organizations including safety
          consulting firms and other contractors. Organizations can either apply
          for corporate membership to be admitted as a Consulting or Affiliate
          member.
        </h1>

        <div className="mt-40">
          {coporatemembership.map((coporate, index) => (
            <div key={index} className=" w-full   ">
              <div
                className="bg-cover  w-full h-[30rem]"
                style={{ backgroundImage: `url('${coporate.bgImage}')` }}
              ></div>
              <div className="mt-20 px-24  ">
                <div className=" font-custom  text-center text-gray-700 font-normal text-lg flex  justify-center items-center">
                  {coporate.text}
                </div>
                <h1 className=" w-full mt-40 text-4xl font-custom font-semibold justify-center flex mb-20">
                  {coporate.header}
                </h1>
                <div className="grid grid-cols-2 gap-x-5 gap-y-8   ">
                  {coporate.content.map((innercontent, childIndex) => (
                    <div
                      key={childIndex}
                      className="  shadow-md py-4 pl-4 shadow-gray-300 rounded-md justify-center "
                    >
                      <div className=" ">
                        {" "}
                        <span className=" mb-4 font-custom text-lg   font-semibold text-black">
                          {innercontent.text1}
                        </span>
                       
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>

       
      </div>
      <Footer />
    </div>
  );
};

export default CoporateMembership;
