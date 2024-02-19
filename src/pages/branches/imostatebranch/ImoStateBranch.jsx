// import imostatebranch from "../../../assets/imostatebranch.docx";
import imobranchA from "../../../assets/imobranchA.png";
import imobranchB from "../../../assets/imobranchB.png";
import imobranchC from "../../../assets/imobranchC.png";

const ImoStateBranch = () => {
  return (
    <div>
      {/* <h1>INTITUTE OF SAFETY PROFESSIONALS OF NIGERIA (ISPON)</h1>
      <h1>IMO State Branch 2024 TRAINING SCHEDULES</h1>
      <h1>Email: isponimostate@gmail.com</h1> */}
      <div className="grid grid-cols-1  ">
        <div className=" w-full  ">
          <img src={imobranchA} alt="" className="border w-full h-full" />
        </div>
        <span className=" w-full  ">
          <img src={imobranchB} alt="" className=" w-full h-full" />
        </span>
        <span className="w-full ">
          <img src={imobranchC} alt="" className=" w-full h-full" />
        </span>
      </div>

      {/* <a href={imostatebranch} download>Download Imo State Branch Document</a> */}
      {/* <a href={imobranchA}></a> */}
    </div>
  );
};

export default ImoStateBranch;
