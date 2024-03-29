// import { useState, useEffect } from "react";
// import { names } from "../data";
import Header from "./Header";
// import bgimg1 from "../assets/branchesbg.png";
// import {RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri"
import "./pages.css";
import Footer from "./Footer";
// import { branches } from "./branches/branches";
// import { Link } from "react-router-dom";
import MediumNavBar from "./MediumNavBar";

const PastPresident = () => {
  const data = [
    { id: 1, name: "PA. DOMINIC AIGBOGUN", yearsofservice: "1980- 1989" },
    { id: 2, name: "SIR. GABRIEL ADOGHE", yearsofservice: "1989- 1997" },
    { id: 3, name: "HRH INNOCENT OKUNAMIRI", yearsofservice: "1997-2003" },
    { id: 4, name: "CHIEF CHRIS ADIGO", yearsofservice: "2003-2009" },
    { id: 5, name: "ALHAJI L.A. ALEBIOSU", yearsofservice: "2009-2011" },
    { id: 6, name: "MR. SHAW FREGENE", yearsofservice: "2011-2013" },
    { id: 7, name: "DR. NNAMDI ILODIUBA", yearsofservice: "2013-2021" },
  ];

  return (
    <div className="grid">
      <div
        className="w-full block md:hidden h-80 pastpresidentbg"
        //  style={{ backgroundImage }}
      >
        <MediumNavBar />
      </div>
      <div className="mb-20">
        <div
          className="md:block hidden h-[26rem]  bg-cover pastpresidentbg"
          //  style={{ backgroundImage }}
        >
          <div className={`w-full  shadow-md `}>
            <Header />
          </div>
        </div>
        <div className="flex  justify-center -mt-[24rem]  z-0">
          <div>
            <p className="mt-32 font-custom text-5xl text-white font-bold">
              PastPresidents
            </p>
            <p className="text-white ml-16 mt-5 text-lg">
              Home / PastPresident
            </p>
          </div>
        </div>

        <div className=" mt-[18rem] mb-72 flex justify-center">
          <table className="border w-full lg:w-[40rem] mt-8">
            <thead className="border ">
              <th className="border ">S/N</th>
              <th className="text-center">NAME</th>
              <th className="border">YEARS OF SERVICE</th>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className=" border ">
                  <td className="text-center py-4">{item.id}</td>
                  <td className="border text-center">{item.name}</td>
                  <td className="text-center">{item.yearsofservice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PastPresident;
