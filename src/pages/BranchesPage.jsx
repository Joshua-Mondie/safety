import { useState, useEffect } from "react";
// import { names } from "../data";
import Header from "./Header";
import bgimg1 from "../assets/bg5.jpeg";
// import {RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri"
import "./pages.css";
import Footer from "./Footer";
import { branches } from "./branches/branches";
import { Link } from "react-router-dom";

const BranchesPage = () => {
  // const [selectedDivs, setSelectedDivs] = useState(
  //   Array(names.length).fill(false)
  // );
  // const [open, setIsOpen] = useState(false)

  // const handleDivClick = (index) => {
  //   const newSelectedDivs = selectedDivs.map((value, i) =>
  //     i === index ? !value : false
  //   );
  //   setSelectedDivs(newSelectedDivs);
  // };

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
              Branches
            </p>
            <p className="text-white ml-6 mt-5 text-lg">Home / Branches</p>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center mt-16  mb-40">
        <div className=" w-[1198px]">
          {/* <h1 className="text-2xl ml-[32rem] font-medium font-custom text-[#444444] mb-10">
            Branches:
            <br />
            <br />
          </h1> */}

          <h1 className="text-xl ml-[26rem] font-medium font-custom text-[#444444] mb-10">
            Click on each Branches to see schedule
          </h1>

          <div className="grid grid-cols-2 px-72 gap-4">
            {branches.map((branch, index) => (
              <Link
                to={branch.route}
                key={index}
                className="rounded-lg border  h-[80px] flex items-center justify-center shadow"
              >
                <span className=" font-bold">{branch.names}</span>
              </Link>
            ))}
          </div>
          {/* {names.map((item, index) => (
            <div key={index} className="bg-gray-100 group shadow flex cursor-pointer my-1">
              <span className="border-r  w-[4rem] bg-gray-200   py-7 flex justify-center ">
                {item.figure}
              </span>

              <div
                className={`relative   w-[90%] pl-5  py- ${
                  selectedDivs[index] ? "gap-y-5 " : "gap-y-5 "
                }`}
                onClick={() => handleDivClick(index)}
              >
                <div className="flex justify-between ">
                  <div className="mt-7 text-xl text ">

                  {item.name}
                  </div>

                  {selectedDivs[index] ? 'active' && <span className="text-4xl block mt-7"><RiArrowDropUpLine/></span> : <span className="text-4xl mt-7 block"><RiArrowDropDownLine/></span> }

                
                </div>
                <span className={` ${selectedDivs && "my-2 block "}  `}>
                  {selectedDivs[index] && <h2>{item.text}</h2>}
                </span>
              </div>
            </div>
          ))} */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BranchesPage;
