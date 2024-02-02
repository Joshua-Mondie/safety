import { useState } from "react";
import "./pages.css";
import { history } from "../data";

const History = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={`h-full flex gap-0 border`}>
      {history.map((historyItem, index) => (
        <div
          key={index}
          className="bg-cover bg-no-repeat h-full  w-full relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundImage: `url('${historyItem.img}')` }}
        >
          <div
            className={`h-full flex pl-10 ${
              hoveredIndex === index
                ? "translate-y-[-60px] transform transition-delay-100  "
                : "block "
            }`}
          >
            <h1
              className={`text-5xl font-custom block text-white font-bold mt-[30rem] mb-10 absolute opacity-100 z`}
            >
              {historyItem.text1}
            </h1>

            <p
              className={`font-custom block text-white font-bold mt-[35rem] z-50  ${
                hoveredIndex === index
                  ? "translate-y-[-10px] transform transition-delay-100 opacity-70 z-50"
                  : "hidden"
              }`}
            >
              {historyItem.text2}
            </p>
          </div>
          {hoveredIndex === index && (
            <div
              className={`w-full h-full absolute top-0 left-0 bg-gray-600 opacity-70 z-50 `}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default History;
