import isponbg from "../assets/isponbg.png";
// import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" fixed w-full z-20 py-8  top-0 bg-white ">
      <div className=" flex gap-x-40    px-6  items-center ">

        {/* <div className="border  flex justify-betwen items-center"> */}
        <img
          src={isponbg}
          alt="images here"
          className="w-[70px] h-[68px] "
        />
        {/* <div className="border w-full"> */}
        {/* <ul className="flex items-center w-full justify-end gap-x-20 border"> */}
        {/* </ul> */}
        {/* </div> */}
        {/* </div> */}

        <ul className="flex text-black gap-x-10 items-center text-base  justify-center  py-4">
          <Link to="/homepage">
            <li className="text-xl font-black">Home</li>
          </Link>
          <button className=" relative" onClick={onClick}>
            <div className="flex items-center">
              <li className="text-xl font-black">About</li>
              {/* <MdOutlineArrowDropDown className="h-6 w-6" /> */}
            </div>
          </button>
          <Link to="/branches">
            <li className="text-xl font-black">Training & Certification</li>
          </Link>

          {/* <Link className="flex items-center">
            <li className="font-medium text-lg">Services</li>
          </Link> */}

          <Link to="/nyscprogramme" className="flex items-center">
            <li className="text-xl font-black">NYSC Program</li>
            {/* <MdOutlineArrowDropDown className="h-6 w-6" /> */}
          </Link>

          {/* <Link> */}

          <li className="text-xl font-black">Safety News</li>
          {/* </Link> */}

          {/* <Link> */}

          <li className="text-xl font-black">Membership</li>
          {/* </Link> */}
          <li>
            <button className=" w-[10rem] py-2 bg-[#000000] text-xl font-black text-[#FFFFFF]">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className=" absolute  ml-96 bg-white min-h-96 w-[40rem] text-2xl font-semibold">
          <Link
            to="/aboutispon"
            className="border py-4 bg-gray-300  flex justify-center "
          >
            About ISPON
          </Link>
          <h1 className="border py-4 bg-gray-300  flex justify-center">
            Objectives of ISPON
          </h1>
          <h1 className="border py-4 bg-gray-300  flex justify-center">
            Board Members
          </h1>
          <h1 className="border py-4 bg-gray-300  flex justify-center">
            Past Presidents
          </h1>
          <h1 className="border py-4 bg-gray-300  flex justify-center">
            Disciplinary Committee
          </h1>
          <h1 className="border py-4 bg-gray-300  flex justify-center">
            Professional Code of Conducts
          </h1>
          <h1 className="border py-4 bg-gray-300  flex justify-center">
            Partnership & Collaboration
          </h1>
        </div>
      )}
    </div>
  );
};

export default Header;
