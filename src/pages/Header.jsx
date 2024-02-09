import { Link } from "react-router-dom";
// import { useState } from "react";
import { navLinks } from "../data";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import safetylogo from "../assets/safetylogo.jpg.svg";

const Header = () => {
  // const [open, isOpen] = useState(true)
  // const

  // const dropdownA = [
  //   {
  //     name: "hi",
  //     route: "/hi",
  //   },
  //   {
  //     name: "hello",
  //     route: "/hi",
  //   },
  //   {
  //     name: "yo",
  //     route: "/h",
  //   },
  // ];

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
          <div className="w-4/5 flex gap-x-10 items-center dropdown">
            {navLinks.map((links, index) => (
              <ul
                key={index}
                className={
                  index === navLinks.length - 1
                    ? "relative md:w-[10rem] py-2 bg-green-600 rounded-full font-black text-[#FFFFFF] flex hover:bg-black hover:text-white justify-center"
                   : '' // Add your other class names here if needed
                }
              >
                <li className="font-custom font-bold">
                  <Link to={links.path}>{links.link}</Link>
                </li>
              </ul>
            ))}
            {/* <div className="absolute h-[10rem] w-11 grid-cols-1 bg-white ml-24 dropdown-content mt-[16.5rem]">

            {dropdownA.map((dropdown, index) => (
              <div key={index} className="">
                <Link to={dropdown.route} className="">
                  <span>{dropdown.name}</span>
                  
                </Link>
              </div>
            ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
