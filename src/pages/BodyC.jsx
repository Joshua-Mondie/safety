import pdffile from "../assets/pdffile.png.svg";

const BodyC = () => {
  return (
    <div className="flex gap-x-4 mx-10">
      <div className=" w-1/3">
        <h1 className="text-3xl font-semibold mb-14">History of ISPON</h1>
        <span className="text-[#692626] text-xs font-normal">
          The Institute was first registered in 1980 as Nigerian Society of
          Safety Professionals (NSSP).
        </span>
        <span className="text-[#692626] text-xs font-normal block mt-4">
          Following the developments....
        </span>
        <button className="border text-xs text-[#747474] font-medium p-2 rounded mt-5">
          Read More
        </button>
      </div>
      <div className=" w-1/3 pr-4 ">
        <h1 className="text-3xl font-semibold mb-14"> Documents</h1>
        <div className="flex gap-x-5 ">
          <img src={pdffile} alt="" className="-mt-16" />

          <div>
            <span className="text-[#692626] text-xs font-normal leading-loose">
              The Institute was established by ISPON Act 2014 to regulate the
              practice of safety and set standards, among others functions. See
              the Act for more details.
            </span>
            <button className=" text-xs text-[#747474] font-medium mt-2 rounded ">
              Download Document
            </button>
          </div>
        </div>

        <div className="flex gap-x-5 mt-8">
          <img src={pdffile} alt="" className="-mt-3" />

          <div>
            <span className="text-[#692626] text-xs font-normal leading-loose block">
              The General Policy Guidelines set out directives for...
            </span>
            <button className=" text-xs text-[#747474] font-medium mt-2 rounded ">
              Download Document
            </button>
          </div>
        </div>

        <div className="flex gap-x-5 mt-8">
          <img src={pdffile} alt="" className="-mt-9" />

          <div>
            <span className="text-[#692626] text-xs font-normal leading-loose block">
            Register of Safety Professionals in Nigeria is prepared, maintained and published by ISPON.
            </span>
            <button className=" text-xs text-[#747474] font-medium mt-2 rounded ">
              Download Document
            </button>
          </div>
        </div>
      </div>

      <div className="pr-4 w-1/3">
        <h1 className="text-3xl font-semibold mb-5">
          {" "}
          Functions and Power of ISPON
        </h1>
        <div className="flex gap-x-5 ">
          {/* <img src={pdffile} alt="" className="-mt-8" /> */}

          <div className="text-[#363B3F]">
            <span className=" text-xs font-normal leading-loose block mb-4">
            Conduct examinations and award certificates and diplomas in the areas of safety management.
            </span>
            <span className="text-xs font-normal leading-loose block mb-4">
            Advise employers on matters relating to qualifications for the practice of safety in Nigeria
            </span>
            <span className="text-xs font-normal leading-loose block mb-4">
            Conduct research into all aspects of safety management
            </span>
            <span className="text-xs font-normal leading-loose block mb-4">
            Organize lectures, seminars, workshops and provide training for persons aspiring to qualify and practice as time those so registered;
            </span>
            <span className="text-xs font-normal leading-loose block mb-4"> 
            Perform such other functions as may be necessary for the advancement of the Institute and the safety management profession in Nigeria.
            </span>
            

            <button className="border text-xs text-[#747474] font-medium p-2 rounded mt-5">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyC;
