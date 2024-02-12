import { useState, useEffect } from "react";
import { names } from "../data";
import Header from "./Header";
import bgimg1 from "../assets/bg5.jpeg";
import {RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri"
import './pages.css'
import Footer from "./Footer";

const BranchesPage = () => {
  const [selectedDivs, setSelectedDivs] = useState(
    Array(names.length).fill(false)
  );
  // const [open, setIsOpen] = useState(false)

  const handleDivClick = (index) => {
    const newSelectedDivs = selectedDivs.map((value, i) =>
      i === index ? !value : false
    );
    setSelectedDivs(newSelectedDivs);
  };

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

      <div className=" flex items-center justify-center mt-40 font-custom mb-40">
        <div className=" w-[1198px]">
          <h1 className="text-2xl font-medium text-[#444444] mb-10">
            Divisions Approved For Professional Development Of Members
          </h1>
          {names.map((item, index) => (
            <div key={index} className="border flex cursor-pointer ">
              {/* <div className=" borer   "> */}
              <span className="border-r  w-[4rem]  py-7 flex justify-center ">
                {item.figure}
              </span>
              {/* </div> */}

              <div
                className={`relative  w-[90%] pl-5  py- ${
                  selectedDivs[index] ? "gap-y-5" : "gap-y-5"
                }`}
                onClick={() => handleDivClick(index)}
              >
                <div className="flex justify-between">
                  <div className="mt-7 text-xl">

                  {item.name}
                  </div>

                  {selectedDivs[index] ? 'active' && <span className="text-4xl block mt-7"><RiArrowDropUpLine/></span> : <span className="text-4xl mt-7 block"><RiArrowDropDownLine/></span> }

                  {/* { <div className={`${selectedDivs[index] ? 'block' : 'hidden'}`}>hi</div>}
                  <div className={`${handleDivClick ? 'hidden' : 'block'}`}>hi</div> */}

                  {/* <div className={`${handleDivClick && "block" } `}>
                  {handleDivClick[index] && <h2>hello</h2>}
                  </div> */}
                </div>
                <span className={` ${selectedDivs && "mt-5 block mb-5"}  `}>
                  {selectedDivs[index] && <h2>{item.text}</h2>}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BranchesPage;
