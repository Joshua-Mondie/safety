import profileimage from "../assets/profilepicture.jpg.svg";

const BodyB = () => {
  return (
    <div
      className="hero-section  h-full bg-cover bg-no-repeat flex justify-center gap-x-28 pt-10"
      style={{ backgroundImage: "url('./src/assets/bgimage.svg')" }}
    >
      <div className=" ">
        <h1 className=" text-3xl font-semibold mb-4">National President</h1>
        <img src={profileimage} alt="" />
        <h1 className="mt-4 text-lg font-bold">
          Pastor Evaristus Uzamere ISOPN
        </h1>
      </div>
      <div className=" w-[456px] text-sm font-normal text-[#692626]">
        <h1 className="text-3xl font-semibold text-black">Welcome to ISPON</h1>
        <h1 className="mt-4">
          The Institute of Safety Professionals of Nigeria (ISPON) is Nigeria’s
          focal point for safety standards and regulations. This is the only
          organization recognized by the laws of the Federal Republic of Nigeria
          to regulate the practice of safety profession, as empowered by the
          ISPON Act 2014.
        </h1>
        <h1 className="mt-4">
          The mandates of the Institute, among other things, include regulating
          the practice of safety management, setting relevant safety standards,
          register persons and organizations that wish to practice safety
          professionals and maintain the Register of Safety Professionals in the
          country.
        </h1>

        <h1 className="mt-4">
          As contained in ISPON Act 2014, a safety professional is “any person
          qualified in an engineering discipline, occupational health sciences,
          environmental sciences or other scientist or specialist in a related
          discipline with an acceptable qualification who has acquired knowledge
          in the practice of safety management and whose name is in the register
          of the Institute.”
        </h1>

        <h1 className="mt-4">
          In line with the law, I hereby welcome you to join this prestigious
          Institute and be registered if you wish to practice safety in Nigeria.
          It is important to let you know that ISPON members are highly placed
          in the industries as they are valuable assets to their employers.
        </h1>
      </div>
      <div className="w-[249px] ">
        <h1 className="text-3xl font-semibold ">Objectives</h1>
        <h1 className="text-sm font-normal text-[#692626] mt-4">
          The Institute was established with the following objectives.
        </h1>
        <h1 className="text-sm font-normal mt-4 ml-4">
          Organize and provide professional training in the area of
          safetymanagement.
        </h1>
        <h1 className="text-sm font-normal mt-4 ml-4">
          In collaboration with relevant government agencies, set standards of
          practice and determine the knowledge and skills to be acquired by
          persons seeking to register and practice as safety professionals and
          to improve on such standards from time to time.
        </h1>

        <h1 className="text-sm font-normal mt-4 ml-4">
          Do all such things as may be necessary to promote the advancement of
          safety profession in both the public and private sector of the
          economy.
        </h1>
      </div>
    </div>
  );
};

export default BodyB;
