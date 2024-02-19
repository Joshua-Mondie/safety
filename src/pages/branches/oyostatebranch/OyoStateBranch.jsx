// import imostatebranch from "../../../assets/imostatebranch.docx";
import oyostatebranchA from "../../../assets/oyostatebranchA.png";
import oyostatebranchB from "../../../assets/oyostatebranchB.png";
import oyostatebranchC from "../../../assets/oyostatebranchC.png";
import oyostatebranchD from "../../../assets/oyostatebranchD.png";
import oyostatebranchE from "../../../assets/oyostatebranchE.png";
// import oyostatebranchF from "../../../assets/oyostatebranchF.png";

import { useState, useEffect } from "react";
import Header from "../../Header";
import bgimg1 from "../../../assets/bg5.jpeg";

const OyoStateBranch = () => {
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
              Oyo State Branch
            </p>
            <p className="text-white ml-20 text-lg">
              Home / Branches / Oyo State Branch
            </p>
          </div>
        </div>
      </div>
      {/* <h1>INTITUTE OF SAFETY PROFESSIONALS OF NIGERIA (ISPON)</h1>
      <h1>IMO State Branch 2024 TRAINING SCHEDULES</h1>
      <h1>Email: isponimostate@gmail.com</h1> */}
      <div className="grid grid-cols-1  mt-20  mx-72">
        <div className=" w-[50rem] h-[70rem]  ">
          <img src={oyostatebranchA} alt="" className=" w-full h-full" />
        </div>
        <span className=" w-[50rem] h-[70rem]  ">
          <img src={oyostatebranchB} alt="" className=" w-full h-full" />
        </span>
        <span className=" w-[50rem] h-[70rem] ">
          <img src={oyostatebranchC} alt="" className=" w-full h-full" />
        </span>
        <span className=" w-[50rem] h-[70rem] ">
          <img src={oyostatebranchD} alt="" className=" w-full h-full" />
        </span>
        <span className=" w-[60rem] h-[70rem] ">
          <img src={oyostatebranchE} alt="" className=" w-full h-full" />
        </span>
        {/* <span className=" w-[70rem] h-[80rem] ">
          <img src={oyostatebranchF} alt="" className=" w-full h-full" />
        </span> */}

        <div className=" text-xl ml-40 mb-10">
            <h1 className=" mb-4"> <span className=" font-bold">PLEASE NOTE:</span> <br /> All Payment should be made of <br />  INSTITUTE OF SAFETY PROFESSIONALS OF NIGERIA <br /> FIRST BANK PLC <br /> <span className=" font-semibold text-lg">ACCOUNT NO:</span>  2024964591</h1>
            <h1 className=" font-bold" >FOR FURTHER ENQUIRIES PLEASE CONTACT:</h1>
            <h1> <span className="font-semibold">Mobile:</span>08038123595, 08060431589, 08033487887</h1>
            <h1> <span className="font-semibold">E-MAIL:</span> oyoispon.gov.ng</h1>
            <h1><span className="font-semibold">WEBSITE:</span>  www.ispon.gov.ng</h1>
        </div>
      </div>

      {/* <a href={imostatebranch} download>Download Imo State Branch Document</a> */}
      {/* <a href={imobranchA}></a> */}
    </div>
  );
};

export default OyoStateBranch;
