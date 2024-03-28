// import React from 'react'
import Header from "../Header";
import bgimg1 from "../../assets/trainingbg2.jpeg";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

import { useState, useEffect } from "react";
import { SlBookOpen } from "react-icons/sl";
import {
  individualMembership,
  individualMembershipRequirements,
} from "../../data2";
import Footer from "../Footer";
import MediumNavBar from "../MediumNavBar";

const IndividualMembership = () => {
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
      <div className="w-full block md:hidden h-80" style={{ backgroundImage }}>
        <MediumNavBar />
      </div>
      <div className="mb-20">
        <div
          className="hidden md:block h-[35rem]   bg-cover"
          style={{ backgroundImage }}
        >
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
              Individual Membership
            </p>
            <p className="text-white ml-48 mt-5 text-lg">
              Home / Individual Membership
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-10 mb-52 px-10">
        <div className=" flex justify-center relative ">
          <div className="w-full lg:mx-72 font-custom  text-justify text-gray-700 font-normal text-lg">
            <span className="md:absolute md:left-[16rem] top-[-0.5rem] text-4xl text-gray-200">
              <RiDoubleQuotesL />
            </span>
            <p>
              The Institute is established with functions and powers to
              establish and maintain a list of persons registered as Safety
              Professionals in Nigeria and publish from time to time those so
              registered... Consequently, a person who is not registered but
              holds himself or herself out as a registered safety professional
              is been guilty of an offence...
            </p>
            <span className="md:absolute text-4xl ml-[32rem] text-gray-200 lg:mt-[-2rem]">
              {" "}
              <RiDoubleQuotesR />{" "}
            </span>
            <br />
            <span className=" mt-2 text-sm text-gray-400 flex items-center gap-1  ">
              {" "}
              <span className="text-md  text-red-500">
                <SlBookOpen />
              </span>{" "}
              Section 3(d) and 14(1) of ISPON Act 2014
            </span>
          </div>
        </div>
        <h1 className="  mt-20 md:px-72 font-custom flex text-center text-gray-500 font-normal text-lg">
          Individual membership is open to engineers, occupational health
          scientists, environmentalists, medical and health practitioners,
          scientists, and anyone who desires to legally practice safety
          management in Nigeria.
        </h1>

        <div className="mt-40">
          {individualMembership.map((individual, index) => (
            <div key={index} className=" w-full   ">
              <div
                className="bg-cover  w-full h-[30rem]"
                style={{ backgroundImage: `url('${individual.bgImage}')` }}
              ></div>
              <div className="mt-20 md:px-24  ">
                <div className=" font-custom  text-center text-gray-700 font-normal text-lg flex  justify-center items-center">
                  {individual.text}
                </div>
                <h1 className=" w-full mt-40 text-4xl font-custom font-semibold justify-center flex mb-20">
                  {individual.header}
                </h1>
                <div className="grid mx-24  md:grid-cols-2  lg:gap-x-5 gap-y-8  ">
                  {individual.content.map((innercontent, childIndex) => (
                    <div
                      key={childIndex}
                      className=" py-10 shadow-md bg-green-600 pt-5 shadow-gray-300 rounded-md justify-center md:w-[20rem] lg:w-[25rem]  lg:h-[17rem]"
                    >
                      <div className="grid grid-cols-1 gap-y-2 px-10">
                        {" "}
                        <span className=" mb-4 font-custom text-2xl   font-semibold text-white">
                          {innercontent.text1}
                        </span>
                        <span className="text-justify font-custom text-white ">
                          {innercontent.text2}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="bg-cover mt-40  w-full h-[30rem]"
                style={{ backgroundImage: `url('${individual.bgImage}')` }}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-40 md:px-40">
          {individualMembershipRequirements.map((member, index) => (
            <div key={index} className="">
              <div className="  justify-center md:flex mb-10 text-2xl font-custom">
                {member.header}
              </div>
              <div className=" grid grid-cols-2 gap-20 font-custom ">
                {member.content.map((container, childIndex) => (
                  <ul className=" list-disc " key={childIndex}>
                    <li className="">{container.text}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualMembership;
