// import React from 'react'
import Header from "./Header";
import history from "../assets/historybg.png";
import MediumNavBar from "./MediumNavBar";
import Footer from "./Footer";

// import { ImArrowRight } from "react-icons/im";

const History = () => {
  return (
    <div>
      <div
        className="w-full block md:hidden "
        //  style={{ backgroundImage }}
      >
        <MediumNavBar />
      </div>
      <div className="mb-20">
        <div className=" h-[30rem]   bg-cover ">
          <div className={`w-full  shadow-md`}>
            <Header />
          </div>
        </div>
        <div className="flex  justify-center -mt-[24rem] mb-40  z-0">
          <div>
            <p className="mt-10 md:mt-20 xl:mt-32 text-4xl md:text-5xl xl:text-6xl font-custom text-green-600 font-bold text-center">
              The Journey Of ISPON
            </p>

            <div className="text-black mt-5 text-[10rem]">
              <img src={history} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-48 bg-gray-100 w-full border border-red-500 ">
          <Footer />
        </div>
    </div>
  );
};

export default History;
