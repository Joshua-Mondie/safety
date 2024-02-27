import { MdMenu } from "react-icons/md";
import safetylogo from "../assets/safetylogo.jpg.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data";

const MediumNavBar = () => {
  const [open, isOpen] = useState(false);
  const btn = () => {
    isOpen(!open);
  };
  return (
    <div className="px-4   justify-center flex border md:hidden w-full h  top-0 h-24 fixed container z-20  bg-white">
      <div className="flex   w-full items-center justify-between">
        <img src={safetylogo} alt="" className="h-14" />
        <span className="text-4xl" onClick={btn}>
          <MdMenu />
        </span>
      </div>
      {open && (
        <div className="absolute border px-12 mt-[5.9rem] w-52  left-0 h-[38rem] overflow-y-scroll md:flex gap-10  bg-white pb-10 ">
          {/* <div className=" w-[12%]  ">
            <img src={safetylogo} alt="" className="h-[100%] w-[100%] py-2" />
          </div> */}
          <div className="w-4/5  grid   items-center  dropdown">
            {navLinks.map((links, index) => (
              <div
                key={index}
                className={`group duration-500 transition ease-in-out     items-center flex   font-custom ${
                  index === navLinks.length - 1
                    ? "font-custom  font-bold text-base mt-6 flex items-center gap-1 "
                    : "hover:text-green-500   h-28" // Add your other class names here if needed
                }`}
              >
                <span className="font-custom  font-bold flex items-center gap-1 ">
                  <Link to={links.path} className="active:text-green-500">
                    {links.link}
                  </Link>
                  <span className="mt-1 text-base">{links.icon}</span>
                </span>

                {links.submenmu && (
                  <div
                    className={`block  ${
                      index === navLinks.length - 2
                        ? " w-[20rem]  z-50 text-black  mt-[22.2rem] pt-4 -ml-40 hidden bg-white group-hover:block shadow-lg"
                        : "  z-50 shadow-lg  w-[9rem] pt-4 transition text-black mt-[42.6rem]   -ml-5 hidden bg-white    group-hover:block "
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
      )}
    </div>
  );
};

export default MediumNavBar;
