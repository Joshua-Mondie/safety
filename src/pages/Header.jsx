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
        <div className=" h-[7rem] flex bg-white py-2 ">
          <div className=" w-[17%] ">
            <img src={safetylogo} alt="" className="h-[100%] w-[100%] py-2" />
          </div>
          <div className="w-4/5 flex gap-x-10 items-center  dropdown">
            {navLinks.map((links, index) => (
              <div
                key={index}
                className={`group   items-center flex h-full relative hover:text-green-500 font-custom ${
                  index === navLinks.length - 1
                    ? " md:w-[10rem] h-[4rem] border  py-2 bg-green-600 rounded-full font-black  text-[#FFFFFF] flex hover:bg-black justify-center"
                    : "" // Add your other class names here if needed
                }`}
              >
                <span className="font-custom font-bold flex items-center gap-1">
                  <Link to={links.path}>{links.link}</Link>
                  <span className="mt-1 text-lg">{links.icon}</span>
                </span>

                {links.submenmu && (
                  <div
                    className={` ${
                      index === navLinks.length - 2 ? "absolute w-[20rem]  text-black mt-[21rem] pt-4 -ml-40 hidden bg-white group-hover:block" : "absolute w-[20rem] text-black mt-[47rem] pt-4 -ml-5 hidden bg-white group-hover:block"
                    }`}
                  >
                    {links.children.map((child, childIndex) => (
                      <div
                        key={childIndex}
                        className={`border-b py-4 px-6 hover:bg-green-500 hover:text-white hover:transform transition hover:delay-100  `}
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
