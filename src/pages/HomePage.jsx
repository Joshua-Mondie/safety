// import BodyA from "./BodyA";
// import BodyB from "./BodyB";
// import BodyC from "./BodyC";
// import Footer from "./Footer";
import { datacal, events } from "../data";
import Boxes from "./Boxes";
import Footer from "./Footer";
import Header from "./Header";
import History from "./History";
import { useState } from "react";

// import Header from "./Header";
// import RecentNews from "./RecentNews";
// import bgimage from

const HomePage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const backgroundImage=  "url('./src/assets/safetybg2.avif')" 

  return (
    <div className=" bg-gray-50">
      <div className="relative pb-44 bg-gray-100  ">
        <div
          className=" h-[60rem] bg-cover bg-no-repeat bg-gray-600 z-50 "
          style={{ backgroundImage }}
        >
          <Header />
          <div className="mx-36 mt-36 flex items-center justify-center ">
            <div>
              <span className="text-white text-8xl font-custom ">
                Safety Standards <br /> and Regulation
              </span>
              <span className="text-white text-xl font-custom block mt-8">
                Moving Nigeria Towards Improved Social and Economic Development{" "}
              </span>
            </div>
          </div>
        </div>
        <div className=" absolute  w-full h-20 bg-gray-100 ">
          <Boxes />
        </div>
        <div className=" h-[85vh] mx-10 mt-[20rem]  ">
          <History />
        </div>
      </div>
      <div className=" shadow-2xl bg-white h-40 mx-10 absolute w-[95vw] -mt-28  flex justify-between px-20">
        {datacal.map((data, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-sm font-extrabold"
          >
            <span className=" text-5xl font-bold text-green-600 font-custom">
              {data.text1}
            </span>
            {data.text2}
          </div>
        ))}
      </div>
      <div className="mb-4 mt-[10rem]  mx-36">
        <div className="flex  items-center justify-between px-1 mb-20">
          <h1 className=" text-4xl font-semibold font-custom ">Events</h1>
          <button className="font-custom text-green-600 font-semibold">
            View All
          </button>
        </div>
        <div className="flex gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="h-[50vh] w-[50vw] bg-cover relative bg-no-repeat shadow-inner"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ backgroundImage: `url('${event.bgImage}')` }}
            >
              <div
                className={`absolute bg-slate-700 opacity-75 top-0 bottom-0 hover:bg-white hover:opacity-100 ${
                  hoveredIndex === index
                    ? "bg-white opacity-100 text-black shadow-lg"
                    : ""
                }`}
              >
                <div className="w-24 py-1 flex bg-opacity-[900] text-opacity-100 z-50 rounded-full font-custom text-sm text-white justify-center mt-14 ml-12 bg-green-600">
                  Conference
                </div>
                <div className="mt-16 pr-10">
                  <h1
                    className={`ml-12 text-base font-custom z-50 mb-2 ${
                      hoveredIndex === index
                        ? "text-gray-400 translate-y-[-30px] transform transition-delay-100"
                        : "text-white"
                    }`}
                  >
                    {event.date}
                  </h1>
                  <h1
                    className={`ml-12 font-extrabold text-2xl font-custom mb-2 ${
                      hoveredIndex === index
                        ? "text-green-600 translate-y-[-30px] transform transition-delay-100"
                        : "text-white"
                    }`}
                  >
                    {event.header}
                  </h1>
                  <h1
                    className={`ml-12 font-bold font-custom ${
                      hoveredIndex === index
                        ? "text-black translate-y-[-30px] transform transition-delay-100"
                        : "text-white"
                    }`}
                  >
                    {event.location}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        <div className=" mt-48 bg-gray-100 ">
          <Footer />
        </div>
      }
    </div>
  );
};

export default HomePage;
