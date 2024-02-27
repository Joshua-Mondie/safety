import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="border mx-4 md:mx-0  border-black font-custom">
      <div className="mt-80 h-3/4 md:mt-20 w-full text-gray-300 md:flex items-center justify-around">
        <div className=" bg-gray-800  md:mt-20 px-4 md:p-0 grid grid-cols-1 gap-y-5 ">
          <span className="flex gap-4  hover:text-white">
            <span className="text-green-500 mt-1 text-2xl ">
              <MdLocationOn />
            </span>
            <span className="">
              Dominic Aigbogun House <br /> 46 Ikotun/Isolo Road by Bolorunpelu
              Bus-stop Ikotun, <br /> Lagos State Nigeria.
            </span>
          </span>
          <span className="flex gap-4 hover:text-white">
            <span className="text-green-500 mt-1 text-xl">
              <FaPhoneAlt />
            </span>
            +234 703 762 8888 & +234 813 629 4444
          </span>
          <span className=" flex gap-4 hover:text-white ">
            <span className="text-green-500 mt-1 text-xl">
              <MdEmail />
            </span>
            <span className=" text-sm md:text-base">
              info@safetyprofessionals.gov.ng <br />
              <span className="absolute md:relative left-9 md:left-0 md:mt-0 mt-2 ">President@safetyprofessionals.gov.ng</span>
            </span>
          </span>
        </div>
        <div className=" grid gap-y-5 mt-20">
          <span className="hover:text-green-600 ">Cookie policy</span>
          <span className="hover:text-green-600 ">Membership certificate</span>
          <span className="hover:text-green-600 ">Training certificate</span>
          <span className="hover:text-green-600 ">Forums</span>
          <span className="hover:text-green-600 ">Give us your feedback</span>
        </div>
      </div>
      <div className=" text-gray-300  w-full flex justify-center mt-10  md:mt-40 ">
        © 2024 Institute of Safety Professionals of Nigeria | All Rights
        Reserved
      </div>
    </div>
  );
};

export default FooterBottom;
