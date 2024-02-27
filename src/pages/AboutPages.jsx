import { useState, useEffect } from "react";
import bgimg1 from "../assets/aboutbg.jpeg";
import pic1 from "../assets/pic1.png";

import Header from "./Header";
import "./pages.css";
import Footer from "./Footer";
import MediumNavBar from "./MediumNavBar";

const AboutPages = () => {
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
      <div className="w-full block md:hidden h-80" style={{ backgroundImage }}>
        <MediumNavBar />
      </div>

      <div className="mb-20 hidden md:block">
        <div
          className=" h-[35rem]  bg-cover bg-no-repeat about"
          style={{ backgroundImage }}
        >
          <div
            className={`w-full  shadow-md ${
              isScrolled ? "fixed top-[-3rem] z-10 " : ""
            }`}
          >
            <Header />
          </div>
        </div>
        <div className="flex  justify-center -mt-[24rem] mb-40  z-0">
          <div>
            <p className="mt-32 font-custom text-5xl text-white font-bold">
              About Us
            </p>
            <p className="text-white ml-6 mt-5 text-lg">Home / About Us</p>
          </div>
        </div>
      </div>
      <div className="mt-40 md:mt-20 mb-64 ">
        <div className="grid md:grid-cols-2 px-4 md:px-20 text-base gap-10 font-custom">
          <div className="mt-4">
            <h1 className="text-2xl flex justify-center font-bold md:text-4xl">
              WELCOME TO ISPON
            </h1>

            <h1 className="mt-8 text-justify text-base text-gray-500">
              The Institute of Safety Professionals of Nigeria (ISPON) is
              Nigeria’s focal point for safety standards and regulations. This
              is the only organization recognized by the laws of the Federal
              Republic of Nigeria to regulate the practice of safety profession,
              as empowered by the ISPON Act 2014. The mandates of the Institute,
              among other things, include regulating the practice of safety
              management, setting relevant safety standards, register persons
              and organizations that wish to practice safety professionals and
              maintain the Register of Safety Professionals in the country. As
              contained in ISPON Act 2014, a safety professional is “any person
              qualified in an engineering discipline, occupational health
              sciences, environmental sciences or other scientist or specialist
              in a related discipline with an acceptable qualification who has
              acquired knowledge in the practice of safety management and whose
              name is in the register of the Institute.” In line with the law, I
              hereby welcome you to join this prestigious Institute and be
              registered if you wish to practice safety in Nigeria. It is
              important to let you know that ISPON members are highly placed in
              the industries as they are valuable assets to their employers.
            </h1>
          </div>
          <img src={pic1} alt="" className="h-[18rem] w-[40rem] md:h-[35rem]" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPages;
