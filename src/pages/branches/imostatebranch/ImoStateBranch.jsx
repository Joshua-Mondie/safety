// import imostatebranch from "../../../assets/imostatebranch.docx";
import imobranchA from "../../../assets/imobranchA.png";
import imobranchB from "../../../assets/imobranchB.png";
import imobranchC from "../../../assets/imobranchC.png";
import { useState, useEffect } from "react";
import Header from "../../Header";
import bgimg1 from "../../../assets/bg5.jpeg";

const ImoStateBranch = () => {
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
                Imo State  Branch
            </p>
            <p className="text-white ml-20 text-lg">Home / Branches / Imo State Branch</p>
          </div>
        </div>
      </div>
      {/* <h1>INTITUTE OF SAFETY PROFESSIONALS OF NIGERIA (ISPON)</h1>
      <h1>IMO State Branch 2024 TRAINING SCHEDULES</h1>
      <h1>Email: isponimostate@gmail.com</h1> */}
      <div className="grid grid-cols-1  mt-20  mx-32">
        <div className=" w-[70rem] h-[80rem]  ">
          <img src={imobranchA} alt="" className=" w-full h-full" />
        </div>
        <span className=" w-[70rem] h-[80rem]  ">
          <img src={imobranchB} alt="" className=" w-full h-full" />
        </span>
        <span className=" w-[70rem] h-[80rem] ">
          <img src={imobranchC} alt="" className=" w-full h-full" />
        </span>
      </div>

      {/* <a href={imostatebranch} download>Download Imo State Branch Document</a> */}
      {/* <a href={imobranchA}></a> */}
    </div>
  );
};

export default ImoStateBranch;
