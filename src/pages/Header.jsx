// import isponbg from "../assets/isponbg.png";
// import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { navLinks } from "../data";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import safetylogo from "../assets/safetylogo.jpg.svg";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const onClick = () => {
  //   setIsOpen(!isOpen);
  // };
  // const navigate = useNavigate();

  return (
    <div className=" w-full z-20   top-0 ">
      <div className="  mx-20 h-52">
        <div className="  h-[25%] bg-gray-100 flex items-center justify-between pl-16 pr-8">
          <div className="flex items-center gap-x-6">
            <span className=" text-gray-500">
              <BsTwitter />
            </span>
            <span className="text-gray-500">
              <FaFacebookF />
            </span>
            <span className="text-gray-500">
              <FaLinkedinIn />
            </span>
            <span className="text-gray-500">
              <IoLogoInstagram />
            </span>
          </div>
          <h1 className=" font-sans text-gray-400 text-sm">
            Open Hours of ISPON Mon - Fri: 8.00 am - 6.00 pm
          </h1>
          <span className=" text-2xl">
            <FiSearch />
          </span>
        </div>
        <div className=" h-[50%] flex bg-white py-4">
          <div className=" w-1/5 ">
            <img src={safetylogo} alt="" className="h-[100%] w-[100%]" />
          </div>
          <div className="w-4/5 flex  gap-x-10 items-center">
            {navLinks.map((links, index) => (
              <ul
                key={index}
                className={
                  index === navLinks.length - 1 &&
                  " md:w-[10rem] py-2 bg-green-600 rounded-full font-black text-[#FFFFFF] flex justify-center"
                }
              >
                <li className=" font-custom font-black">
                  <Link to={links.path}>{links.link}</Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      {/* <div className=" flex gap-x-40    px-6  items-center ">
        <img
          src={isponbg}
          alt="images here"
          className="w-10 h-10 md:w-[70px] md:h-[68px] "
        />

        <div className="flex  text-black md:gap-x-10 items-center text-base  justify-center  md:py-4">
          {navLinks.map((links, index) => (
            <ul
              key={index}
              className={
                index === navLinks.length - 1 &&
                " md:w-[10rem] py-2 bg-[#000000] md:text-xl font-black text-[#FFFFFF] flex justify-center"
              }
            >
              <li className="text-xl font-black">
                <Link to={links.path}>{links.link}</Link>
              </li>
            </ul>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Header;
