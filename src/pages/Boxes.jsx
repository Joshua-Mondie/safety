import { Link } from "react-router-dom";
import { boxes } from "../data";

const Boxes = () => {
  return (
    <div className="w-full flex gap-x-8 items-center justify-center -mt-14">
      {boxes.map((box, index) => (
        <Link
          className="bg-white border-red-400 h-[12rem] w-[14rem] shadow-2xl flex justify-center place-items-center transform transition-transform hover:translate-y-[-10px] hover:bg-green-600 hover:text-white ease-in-out duration-300"
          key={index}
        >
          <div className="">
            {box.icon} {box.text}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Boxes;
