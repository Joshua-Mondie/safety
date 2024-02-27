import { Link } from "react-router-dom";
import { boxes } from "../data";

const Boxes = () => {
  return (
    <div className=" grid md:grid-cols-2 gap-2  px-2  w-full md:flex gap-x-4 items-center justify-center md:-mt-14">
      {boxes.map((box, index) => (
        <Link
          className="h-[10rem]  group  bg-white border-red-400 md:h-[12rem] md:w-[14rem] shadow-2xl flex justify-center place-items-center transform transition-transform hover:translate-y-[-10px] ease-in-out duration-300 text-green-400 hover:bg-green-600 hover:text-white "
          key={index}
        >
          <div className="">
            <span className="">{box.icon}</span>
            <span className="group-hover:text-white text-black">{box.text}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Boxes;
