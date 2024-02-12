import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const FooterBottom = () => {
  return (
    <div className="border  h-full border-black font-custom">
      <div className=" h-3/4 mt-20 w-full text-gray-300 flex items-center justify-around">
        <div className="grid gap-y-5">
          <span className="flex gap-4  hover:text-white">
            <span className="text-green-500 mt-1 text-2xl ">
              <MdLocationOn />
            </span>
            Dominic Aigbogun House <br /> 46 Ikotun/Isolo Road by Bolorunpelu
            Bus-stop Ikotun, <br /> Lagos State Nigeria.
          </span>
          <span className="flex gap-4 hover:text-white">
            <span className="text-green-500 mt-1 text-xl">
              <FaPhoneAlt />
            </span>
            +234 703 762 8888 & +234 813 629 4444
          </span>
          <span className=" flex gap-4 hover:text-white">
            <span className="text-green-500 mt-1 text-xl">
              <MdEmail />
            </span>
            info@safetyprofessionals.gov.ng <br />
            President@safetyprofessionals.gov.ng
          </span>
        </div>
        <div className=" grid gap-y-5">
          <span className="hover:text-green-600 ">Cookie policy</span>
          <span className="hover:text-green-600 ">Membership certificate</span>
          <span className="hover:text-green-600 ">Training certificate</span>
          <span className="hover:text-green-600 ">Forums</span>
          <span className="hover:text-green-600 ">Give us your feedback</span>
        </div>
      </div>
      <div className=" text-gray-300  w-full flex justify-center ">
        © 2024 Institute of Safety Professionals of Nigeria | All Rights
        Reserved
      </div>
    </div>
  );
};

export default FooterBottom;
