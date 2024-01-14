import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  return (
    <div className="border h-[171px] mt-20 bg-green-700">
      <div className="border-b h-1/2  flex justify-center text-xl pt-6 text-white">
        It is illegal to practice safety in Nigeria if your name is not in ISPON
        register
      </div>
      <div className=" flex  justify-around items-center text-xl pt-6 text-white">
        <div>
          2024 institute of safety professionals of Nigeria <span> </span> All
          Rights Reserved
        </div>
        <div className="flex gap-x-2">
          <span className="text-white">
            <FaFacebookF />
          </span>
          <span className="text-white">
            <FaWhatsapp />
          </span>
          <span className="text-white">
            <MdKeyboardArrowUp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
