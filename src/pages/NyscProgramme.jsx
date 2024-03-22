import { useState, useEffect } from "react";
import Header from "./Header";
import bgimg1 from "../assets/nyscbg.png";
import Footer from "./Footer";
import MediumNavBar from "./MediumNavBar";

const NyscProgramme = () => {
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

  const objectives = [
    {
      num: (
        <span className=" h-10 w-10 justify-center items-center rounded-full flex bg-green-600 text-white">
          1
        </span>
      ),
      text: "To Promote National Safety Consciousness",
    },
    {
      num: (
        <span className=" h-10 w-10 justify-center flex items-center rounded-full bg-green-600 text-white">
          2
        </span>
      ),
      text: "To use safety education as a tool for national peace and unity",
    },
    {
      num: (
        <span className=" h-10 w-10 justify-center flex items-center rounded-full bg-green-600 text-white">
          3
        </span>
      ),
      text: "To provide professionals training and certification in areas of safety management",
    },
    {
      num: (
        <span className=" h-10 w-10 justify-center flex items-center rounded-full bg-green-600 text-white">
          4
        </span>
      ),
      text: "To register the graduate as members of Institute of Safety Professionals of Nigeria",
    },
    {
      num: (
        <span className=" h-10 w-10 justify-center flex items-center rounded-full bg-green-600 text-white">
          5
        </span>
      ),
      text: "To do all other things to enhance the development of Nigerian graduates in line with the institute's act and NYSC Decree",
    },
  ];
  const nationalProgrammeCordinator = [
    {
      num: (
        <span className=" h-10 w-10 justify-center items-center rounded-full flex bg-green-600 text-white">
          1
        </span>
      ),
      text: "Oversee the programme nationwide and directly supervise the Regional Programme Coordinators.",
    },
    {
      num: (
        <span className=" h-10 w-10 justify-center flex items-center rounded-full bg-green-600 text-white">
          2
        </span>
      ),
      text: "Provide policies and necessary directives for successful administration of the scheme.",
    },
    {
      num: (
        <span className=" h-10 w-10 justify-center flex items-center rounded-full bg-green-600 text-white">
          3
        </span>
      ),
      text: "Coordinate the timely payment and remittance of remuneration and other benefits for programme officials.",
    },
    {
      num: (
        <span className=" h-10 w-10 justify-center flex items-center rounded-full bg-green-600 text-white">
          4
        </span>
      ),
      text: "Provide orientation guidelines, training manuals and presentation guides for the scheme.",
    },
    {
      num: (
        <span className=" h-10 w-10 justify-center flex items-center rounded-full bg-green-600 text-white">
          5
        </span>
      ),
      text: "Be responsible to ensure that successful Corps members get their training certificates and membership certificates from the Institute.",
    },
    {
      num: (
        <span className=" h-10 w-10 justify-center flex items-center rounded-full bg-green-600 text-white">
          6
        </span>
      ),
      text: "Ensure the procurement of insurance policies for all programme coordinators.",
    },
    {
      num: (
        <span className=" h-10 w-10 justify-center flex items-center rounded-full bg-green-600 text-white">
          7
        </span>
      ),
      text: "Liaise with NYSC National Headquarters and provide programme report to NYSC as may be required.",
    },
  ];

  const backgroundImage = `url(${bgimg1})`;

  return (
    <div className="md:grid ">
      <div className="w-full block md:hidden h-80" style={{ backgroundImage }}>
        <MediumNavBar />
      </div>

      <div className="mb-20 hidden md:block">
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
              NYSC PROGRAMME
            </p>
            <p className="text-white ml-20 text-lg">Home / NYSC Programme</p>
          </div>
        </div>
      </div>

      {/* <div className="w-[1361px] mx-auto border mt-8 h-[60rem] flex justify-center"> */}
      <div className=" md:mb-[50rem] mt-32 px-8 grid  md:px-0  mb-[90rem]">
        <h1 className="text-2xl text-black font-custom md:text-4xl font-bold mb-10  w-full  flex justify-center">
          Program Overview
        </h1>
        <h1 className="md:text-center  text-justify font-normal text-gray-500 block md:w-[50rem] md:mx-72  font-custom text-lg ">
          The NYSC Professional Development Programme is a scheme designed by
          Institute of Safety Professionals of Nigeria to enhance professional
          development of Nigerian graduates in line with the objectives of
          Institute of Safety Professionals of Nigeria Act 2014 and the National
          Youth Services Corps Decree 1973, Strictly for serving Corps Members.
        </h1>

        <h1 className="text-black text-2xl font-custom mt-56 md:text-4xl font-bold mb-10  flex justify-center">
          Orientation Exercise
        </h1>
        <h1 className="text-justify md:text-center font-normal text-gray-500 block md:w-[50rem] md:mx-72  font-custom text-lg ">
          There shall be Orientation exercise in all the State of the
          Federation. This shall be the direct responsibility of Programme
          Coordinator in each State. Presentation guide to be used during the
          orientation exercise shall be provided by the national headquaters and
          all programme Coordinators shall ensure that the exercise is done to
          the standard stipulated by the institute. State Programme Coordinators
          should contact the Zonal Coordinator for support in this regard.llllll
        </h1>

        <div
          className=" h-[40rem] w-full mb-[28rem] md:mb-0  mt-40 bg-cover md:flex justify-center py-10"
          // style={{ backgroundImage }}
        >
          <div className="mb-80 ">
            <h1 className=" text-2xl text-black  text-center font-custom md:text-4xl font-bold md:ml-36 mb-10">
              Programme Objectives
            </h1>
            <div className="grid md:grid-cols-3 md:gap-6   font-custom font-bold md:w-[50rem] ">
              {" "}
              {/* Added grid class */}
              {objectives.map((obj, index) => (
                <div key={index} className="  mt-10 flex gap-4  ">
                  {" "}
                  {/* Added border class */}
                  <span className="">{obj.num}</span>
                  <p className=" text-wrap text-gray-500 font-thin ">
                    {obj.text}
                  </p>
                </div>
              ))}
            </div>
            <h1 className="text-black text-center  text-2xl font-custom  md:text-4xl font-bold flex justify-center mt-40 ">
              National Program Cordinator
            </h1>
            <div className="grid md:grid-cols-3 md:gap-6   font-custom font-bold md:w-[50rem] ">
              {" "}
              {/* Added grid class */}
              {nationalProgrammeCordinator.map((obj, index) => (
                <div key={index} className="  mt-10 flex gap-4 ">
                  {" "}
                  {/* Added border class */}
                  <span className="">{obj.num}</span>
                  <p className=" text-wrap text-gray-500 font-thin ">
                    {obj.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default NyscProgramme;
