import { useState } from "react";
import { names } from "../data";
import Header from "./Header";

const BranchesPage = () => {
  const [selectedDivs, setSelectedDivs] = useState(
    Array(names.length).fill(false)
  );

  const handleDivClick = (index) => {
    const newSelectedDivs = selectedDivs.map((value, i) =>
      i === index ? !value : false
    );
    setSelectedDivs(newSelectedDivs);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center text-7xl font-semibold border">
        <h1>Branches</h1>
      </div>

      <div className="border flex items-center justify-center">
        <div className=" w-[1198px]">
          <h1 className="text-2xl font-medium text-[#444444] ">
            Divisions Approved For Professional Development Of Members
          </h1>
          {names.map((item, index) => (
            <div key={index} className="border flex cursor-pointer">
              {/* <div className=" borer   "> */}
              <span className="border-r  w-[4rem]  py-6 flex justify-center">
                {item.figure}
              </span>
              {/* </div> */}

              <div
                className={`relative  w-[90%] pl-5  py-6 ${
                  selectedDivs[index] ? "gap-y-5" : "gap-y-5"
                }`}
                onClick={() => handleDivClick(index)}
              >
                <div >{item.name}</div>
                <span className={` ${selectedDivs && "mt-10 block" }  `}>
                  {selectedDivs[index] && <h2>{item.text}</h2>}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchesPage;
