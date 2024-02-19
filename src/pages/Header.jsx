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
    <div className=" w-full z-20   ">
      <div className=" h-[10rem]">
        <div className="  h-[3rem] bg-gray-100 flex items-center justify-between pl-16 pr-8 ">
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
        <div className=" h-[7rem] flex gap-10  bg-white py-2  sticky">
          <div className=" w-[12%]  ">
            <img src={safetylogo} alt="" className="h-[100%] w-[100%] py-2" />
          </div>
          <div className="w-4/5 flex gap-x-16 items-center  dropdown">
            {navLinks.map((links, index) => (
              <div
                key={index}
                className={`group duration-500 transition ease-in-out     items-center flex   font-custom ${
                  index === navLinks.length - 1
                    ? "rounded-full text-sm h-8 py-6 px-6 bg-green-500 text-white  hover:bg-slate-700 absolute -right-10"
                    : "hover:text-green-500   h-28" // Add your other class names here if needed
                }`}
              >
                <span className="font-custom font-bold flex items-center gap-1 ">
                  <Link to={links.path} className="active:text-green-500">
                    {links.link}
                  </Link>
                  <span className="mt-1 text-base">{links.icon}</span>
                </span>

                {links.submenmu && (
                  <div
                    className={` ${
                      index === navLinks.length - 2
                        ? "absolute w-[20rem]  z-50 text-black  mt-[22.2rem] pt-4 -ml-40 hidden bg-white group-hover:block shadow-lg"
                        : "  z-50 shadow-lg absolute w-[20rem] pt-4 transition text-black mt-[42.6rem]   -ml-5 hidden bg-white    group-hover:block "
                    }`}
                  >
                    {links.children.map((child, childIndex) => (
                      <div 
                        key={childIndex}
                        className={`border-b py-4 bg-white px-6 hover:bg-green-500 hover:text-white hover:transform transition hover:delay-100  `}
                      >
                        <Link to={child.route}>{child.title}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
