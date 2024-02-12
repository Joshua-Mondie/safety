import { useState, useEffect } from "react";
import Header from "./Header";
import bgimg1 from "../assets/bg5.jpeg";
import Footer from "./Footer";

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

  const backgroundImage = `url(${bgimg1})`;

  return (
    <div className="grid ">
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
              NYSC PROGRAMME
            </p>
            <p className="text-white ml-20 text-lg">Home / NYSC Programme</p>
          </div>
        </div>
      </div>

      {/* <div className="w-[1361px] mx-auto border mt-8 h-[60rem] flex justify-center"> */}
      <div className="w-full mb-40 mt-32 ">
        <h1 className="text-center font-normal text-gray-500 block w-[50rem] mx-72  font-custom text-lg ">
          The NYSC Professional Development Programme is a scheme designed by
          Institute of Safety Professionals of Nigeria to enhance professional
          development of Nigerian graduates in line with the objectives of
          Institute of Safety Professionals of Nigeria Act 2014 and the National
          Youth Services Corps Decree 1973, Strictly for serving Corps Members.
        </h1>

        <div
          className="h-[40rem] w-full  mt-40 bg-cover flex justify-center py-10"
          // style={{ backgroundImage }}
        >
          <div>
            <h1 className="text-black font-custom text-4xl font-bold ml-36 mb-10">
              Programme Objectives
            </h1>
            <div className="grid grid-cols-3 itemc gap-16 font-custom font-bold w-[50rem] ">
              {" "}
              {/* Added grid class */}
              {objectives.map((obj, index) => (
                <div key={index} className="  mt-10 flex gap-4  w-[14rem]">
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
