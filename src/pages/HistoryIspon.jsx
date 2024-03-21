import { useState } from "react";
import "./pages.css";
import { history } from "../data";
// import bgimg2 from "../assets/"

const History = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={`h-full     md:flex border`}>
      {history.map((historyItem, index) => (
        <div
          key={index}
          className="bg-cover bg-no-repeat h-full  w-full relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{backgroundImage: `url('${historyItem.img}')` }}
        >
          <div
            className={`h-full mt-4 md:mt-0 flex pl-10 ${
              hoveredIndex === index
                ? "translate-y-[-130px] md:translate-y-[-60px] transform transition-delay-100  "
                : "block "
            }`}
          >
            <h1
              className={`mt-[12rem] text-5xl font-custom block text-white font-bold md:mt-[28rem] mb-10 absolute opacity-100 `}
            >
              {historyItem.text1}
            </h1>

            <p
              className={`mt-[17rem] font-custom block text-white  font-bold md:mt-[33rem] z-40  ${
                hoveredIndex === index
                  ? "translate-y-[-10px] transform transition-delay-100 text-lg font-bold opacity-70 z-40"
                  : "hidden"
              }`}
            >
              {historyItem.text2}
            </p>
          </div>
          {/* {hoveredIndex === index && (
            <div
              className={`w-full h-full absolute top-0 left-0 bg-gray-600 opacity-70 z-50 `}
            ></div>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default History;
