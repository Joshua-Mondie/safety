/** @format */

import { Link } from "react-router-dom";
// import { useState } from "react";
import { navLinks } from "../data";
// import { FiSearch } from "react-icons/fi";
// import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { IoLogoInstagram } from "react-icons/io";
// import { BsTwitter } from "react-icons/bs";
import safetylogo from "../assets/safetylogo.jpg.svg";

const Header = () => {
	return (
		<div className=" w-full z-20 fixed  ">
			<div className="hidden w-full shadow-lg h-[6rem] md:flex gap-10 md:gap-5  bg-white py-2  sticky">
				<div className=" w-[12%] md:w-[9%] lg:w-[12%]  ">
					<img src={safetylogo} alt="" className="h-[100%] w-[100%] py-2" />
				</div>
				<div className="w-4/5 flex gap-x-14 md:gap-x-5 lg:gap-x-7  items-center  dropdown">
					{navLinks.map((links, index) => (
						<div
							key={index}
							className={`group duration-500 transition tab ease-in-out     items-center flex   font-custom  ${
								index === navLinks.length - 1
									? "rounded-full text-sm h-8 py-6 px-6 md:h-4 md:px-2 md:py-4  lg:px-3 lg:py-4 bg-green-500 text-white lg:text-xs hover:bg-slate-700 absolute -right-10 md:-right-20 lg:-right-10"
									: "hover:text-green-500  lg:text-sm  h-28" // Add your other class names here if needed
							}`}
						>
							<div className="font-custom md:flex items-center gap-1 ">
								<div className="flex items-center gap-1">
									<Link to={links.path} className={` tab`}>
										{links.link}
									</Link>
									<span className="mt-1 text-base ">{links.icon}</span>
								</div>
								<div>
									
								</div>
							</div>

							{links.submenmu && (
								<div
									className={`hidden ${
										index === navLinks.length - 3
											? "absolute w-[20rem]  z-50 text-black   mt-[24rem] pt-4 -ml-40 hidden bg-white md:group-hover:block shadow-lg"
											: "  z-50 shadow-lg absolute overflow-y-scroll h-[30rem] w-[20rem] pt-4 transition text-black mt-[34rem]   -ml-5 hidden bg-white    group-hover:block "
									}`}
								>
									{links.children.map((child, childIndex) => (
										<div
											key={childIndex}
											className={`border-b py-4 bg-white px-6 hover:bg-green-500 hover:text-green-500 hover:transform transition hover:delay-100  `}
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
			{/* </div> */}
		</div>
	);
};

export default Header;
