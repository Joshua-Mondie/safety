// import { news } from "../data";
// import { LuMenuSquare } from "react-icons/lu";
import articlecard from "../assets/articlecard.svg"
import articlecard1 from "../assets/articlecard1.svg"
import articlecard2 from "../assets/articlecard2.svg"



const RecentNews = () => {
  const divs =[
    {
      image:articlecard1
    },
    {
      image:articlecard
    },
    {
      image:articlecard2
    }
  ]
  return (
    <div className="mt-10">
      <div className="flex justify-between mt-5 px-12">
        <h1 className="text-3xl font-semibold">Recent news</h1>
        <button className="border w-[103.75px] py-2">View All</button>
      </div>
      <div className="flex mt-5  gap-x-6">

        {divs.map((div, index)=>(
          <div key={index}>
              <img src={div.image} alt="" />
          </div>
        ))}


        {/* {news.map((news, index) => (
          <div
            key={index}
            className=" w-[368px]  min-h-[200px] shadow-lg rounded-lg flex flex-col items-center justify-center pt-1 mx-1 relative border "
          >
            <img src={news.image} alt="" className="w-[100px] h-[100px]" />
            <h1 className="text-2xl font-semibold text-center my-4">
              {news.title}
            </h1>
            <p className=" text-center text-base font-normal">{news.text}</p>

            <div className="w-full flex justify-end items-center h-10 absolute mt-96">
              <button className=" py-2 border-l text-[#692626]  text-sm flex px-3 items-center gap-x-2">
                <span className="text-[#A8A8A8]">
                  <LuMenuSquare />
                </span>
                Read more
              </button>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default RecentNews;
