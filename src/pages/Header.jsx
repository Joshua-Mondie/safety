import isponbg from "../assets/isponbg.png";
// import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { navLinks } from "../data";


const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const onClick = () => {
  //   setIsOpen(!isOpen);
  // };
  // const navigate = useNavigate();
  

  return (
    <div className=" fixed w-full z-20 lg:py-8  top-0 bg-white ">
      <div className=" flex gap-x-40    px-6  items-center ">
        {/* <div className="border  flex justify-betwen items-center"> */}
        <img src={isponbg} alt="images here" className="w-10 h-10 md:w-[70px] md:h-[68px] " />

        <div className="flex  text-black md:gap-x-10 items-center text-base  justify-center  md:py-4">
          {navLinks.map((links, index) => (
            <ul
              key={index}
              className={index === navLinks.length - 1 && " md:w-[10rem] py-2 bg-[#000000] md:text-xl font-black text-[#FFFFFF] flex justify-center"}
            >
              <li className="text-xl font-black">
                <Link to={links.path}>{links.link}</Link>
              </li>
            </ul>
          ))}
        </div>

        {/* <ul className="flex text-black gap-x-10 items-center text-base  justify-center  py-4">
          <Link to="">
            <li className="text-xl font-black">Home</li>
          </Link>
          <button className=" relative" onClick={onClick}>
            <div className="flex items-center">
              <li className="text-xl font-black">About</li>
            </div>
          </button>
          <Link to="/branches">
            <li className="text-xl font-black">Training & Certification</li>
          </Link>

          

          <Link to="/nyscprogramme" className="flex items-center">
            <li className="text-xl font-black">NYSC Program</li>
          </Link>


          <li className="text-xl font-black">Safety News</li>


          <li className="text-xl font-black">Membership</li>
          <li>
            <button className=" w-[10rem] py-2 bg-[#000000] text-xl font-black text-[#FFFFFF]">
              Contact Us
            </button>
          </li>
        </ul> */}
      </div>
      {/* {isOpen && (
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
      )} */}
    </div>
  );
};

export default Header;
