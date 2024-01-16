import { useState, useEffect } from "react";

const BodyA = () => {
  // Retrieve the initial time from localStorage or default to 0
  const initialTime = parseInt(localStorage.getItem("currentTime")) || 0;

  const [currentTime, setCurrentTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current time
      setCurrentTime((prevTime) => {
        // Store the updated time in localStorage
        localStorage.setItem("currentTime", prevTime + 1);
        return prevTime + 1;
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(currentTime / (60 * 60 * 24));
  const hours = Math.floor((currentTime % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((currentTime % (60 * 60)) / 60);
  const seconds = currentTime % 60;

  return (
    <div
      className="slide-container h-[100vh] flex items-center justify-center  bg-cover bg-no-repeat   md:pl-8 "
      style={{ backgroundImage: "url('src/assets/bg-image.svg')" }}
    >
      <div className="text-white">
        <h1 className="text-white font-bold text-4xl  flex justify-center">
          COMING SOON
        </h1>
        <h1 className=" mt-5 text-gray-300 font-serif">
          Our Website is under construction follow us for update now!
        </h1>

        <div>
          <div className="flex  gap-x-2 justify-center mt-10 ">
            <div className="border flex justify-center items-center border-gray-600 rounded-full  px-8">
              <span>
                <span className="ml-3 text-lg font-semibold">{days}</span>
                <br />{" "}
                <span className=" text-purple-400 font-extralight">days</span>
              </span>
            </div>

            <div className="border flex justify-center items-center border-gray-600 rounded-full p-6 px-7">
              <span>
                <span className="ml-3 text-lg font-semibold">{hours}</span>{" "}
                <br />{" "}
                <span className=" text-purple-400 font-extralight">hours</span>
              </span>
            </div>

            <div className="border flex justify-center items-center border-gray-600 rounded-full p-3 px-5">
              <span>
                <span className="ml-3 text-lg font-semibold">{minutes}</span>{" "}
                <br />{" "}
                <span className=" text-purple-400 font-extralight">
                  minutes
                </span>
                <br />
              </span>
            </div>
            <div className="border flex justify-center items-center border-gray-600 rounded-full p-3 px-5">
              <span>
                <span className="ml-3 text-lg font-semibold">{seconds}</span>{" "}
                <br />{" "}
                <span className=" text-purple-400 font-extralight">
                  seconds
                </span>
                <br />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <form action="">
            <input
              type="text"
              className="w-[18rem] py-3 rounded-full text-black px-4"
              placeholder="Enter Email Address"
            />
            <button className="bg-purple-400 w-[10-rem] ml-4 px-5 py-4 rounded-full text-xs">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BodyA;
