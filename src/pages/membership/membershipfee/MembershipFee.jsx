// import React from 'react'
import { useState, useEffect } from "react";
import Header from "../../Header";
import bgimg1 from "../../../assets/bg5.jpeg";
import Footer from "../../Footer";

const MembershipFee = () => {
  const backgroundImage = `url(${bgimg1})`;
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
              Membership Fee
            </p>
            <p className="text-white ml-20 text-lg">Home / Membership Fee</p>
          </div>
        </div>
      </div>
      <div className="mt-40 mb-40">
        <p className=" px-96 font-custom text-justify text-lg text-gray-500">
          The Institute is established with functions and powers to establish
          and maintain list of persons registered as Safety Professionals in
          Nigeria and publish from time to time those so registered...
          Consequently, a person who is not registered but holds himself or
          herself out as a registered safety professional is been guilty of an
          offence...
        </p>
        <h1 className=" px-96 text-sm font-custom text-gray-400">
          Section 3(d) and 14(1) of ISPON Act 2014
        </h1>
        <p className=" font-custom px-96 mt-10">
          <span className=" text-lg font-semibold">Note:</span> Membership
          application fee for individuals is N50,000 only.
        </p>

        <div className="pl-96 mt-20">
          <h1 className="ml-64 text-3xl mb-8 mt-40">Account Details</h1>
          <div className="flex gap-x-10 mb-40">
            <p className="font-custom text-gray-500">
              <span className=" text-xl text-green-600">Bank:</span> Zenith Bank
            </p>
            <p className="font-custom text-gray-500">
              <span className="text-xl text-green-600">Account Number:</span> 1225579797
            </p>
            <p className="font-custom text-gray-500">
              <span className="text-xl text-green-600">Name:</span> Institute of Safety
              Professionals of Nigeria
            </p>
          </div>

          <p className="font-custom text-lg mb-4 text-gray-500">
            To apply to any grade in the Institute, intending members are to pay
            a non-refundable fee of <br /> Fifty thousand Naira only (50,000){" "}
          </p>
          <span className="font-custom text-gray-500">
            <p>
              <span className="text-lg">Corporate-Affiliate:</span> 375,000
            </p>
            <p>
              <span className="text-lg">Corporate-Consulting:</span> 375,000
            </p>
          </span>
          <div className="mb-40 mt-20">
            <h1 className=" text-2xl mb-2">Contact Us</h1>
            <h1 className=" font-custom mb-2">ISPON NATIONAL HEADQUARTERS</h1>
            <h1 className=" font-custom mb-2">Dominic Aigbogun House</h1>
            <h1 className=" font-custom mb-2">46 Ikotun/ Isolo</h1>
            <h1 className=" font-custom mb-2">Bolorunpelu Bus-Stop,</h1>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MembershipFee;
