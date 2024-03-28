/** @format */

// import BodyA from "./BodyA";
// import BodyB from "./BodyB";
// import BodyC from "./BodyC";
// import Footer from "./Footer";
import { datacal, events } from "../data";
import Boxes from "./Boxes";
import Footer from "./Footer";
import Header from "./Header";
import History from "./HistoryIspon";
import { useState } from "react";
// import bgimg2 from "../assets/aboutbg.jpeg";

// import bgimg1 from "../assets/mbg5.jpeg";
import MediumNavBar from "./MediumNavBar";
// import one from  "../assets/one.jpg"

// import Header from "./Header";
// import RecentNews from "./RecentNews";
// import bgimage from

const HomePage = () => {
	const [hoveredIndex, setHoveredIndex] = useState(null);

	// const [isScrolled, setIsScrolled] = useState(false);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const scrollTop = window.scrollY;
	// 		if (scrollTop > 10) {
	// 			setIsScrolled(true);
	// 		} else {
	// 			setIsScrolled(false);
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	const handleMouseEnter = (index) => {
		setHoveredIndex(index);
	};

	const handleMouseLeave = () => {
		setHoveredIndex(null);
	};

	// const backgroundImage = `url(${bgimg2})`;

	return (
		<div className=" bg-gray-50">
			<div
				className="w-full block md:hidden h-80"
				//  style={{ backgroundImage }}
			>
				<MediumNavBar />
			</div>
			<div className="md:relative pb-44 bg-gray-100 md:block">
				<div
					className="h-[35rem] w-full border border-black bg-cover bg-no-repeat bgimage"
					// style={{
					// 	backgroundImage: `url('../assets/aboutbg.jpeg')`,
					// }}
				>
					<div className="w-full shadow-md">
						<Header />
					</div>
				</div>
				<div className="block md:absolute w-full h-20 bg-gray-100">
					<Boxes />
				</div>
				<div className="mt-[54rem] mb-[40rem] md:mb-0 h-[50vh] mx-2 md:h-[85vh] md:mx-10 md:mt-[20rem]">
					<History />
				</div>
			</div>

			<div className=" border   mx-3 py-6 md:py-0 h-[28rem] grid grid-cols-1 mt-40 shadow-2xl bg-white md:h-40 md:mx-10 lg:absolute md:w-[95vw] md:-mt-28  md:flex md:justify-between md:px-20">
				{datacal.map((data, index) => (
					<div
						key={index}
						className="flex gap-10 md:justify-center md:gap-x-5  justify-center items-center md:gap-4 text-sm font-extrabold"
					>
						<span className=" text-5xl font-bold text-green-600 font-custom">
							{data.text1}
						</span>
						{data.text2}
					</div>
				))}
			</div>
			<div className="mt-40 mb-2 md:mt-[10rem] mx-2  md:mx-36">
				<div className="md:flex mb-10 items-center justify-between px-1 md:mb-20">
					<h1 className=" mb-4 text-4xl font-semibold font-custom ">Events</h1>
					<button className="font-custom text-green-600 font-semibold">
						View All
					</button>
				</div>
				<div className="md:flex md:gap-8 grid gap-y-4 w-full">
					{events.map((event, index) => (
						<div
							key={index}
							className="w-[95vw] h-[60vh] md:h-[50vh] md:w-[50vw] bg-cover relative bg-no-repeat shadow-inner"
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={handleMouseLeave}
							style={{ backgroundImage: `url('${event.bgImage}')` }}
						>
							<div
								className={`absolute bg-slate-700 opacity-75 top-0 bottom-0 hover:bg-white hover:opacity-100 ${
									hoveredIndex === index
										? "bg-white opacity-100 text-black shadow-lg"
										: ""
								}`}
							>
								<div className="w-24 py-1 mb-10 md:mb-0 flex  overflow-hidden rounded-full font-custom text-sm text-white justify-center mt-14 ml-12 z-60 bg-green-600">
									Conference
								</div>
								<div className="mt-4 md:mt-16 pr-10">
									<h1
										className={`ml-12 text-base font-custom z-50 mb-2 ${
											hoveredIndex === index
												? "text-gray-400 mt-10 translate-y-[-30px] md:translate-y-[-30px] transform transition-delay-100"
												: "text-white"
										}`}
									>
										{event.date}
									</h1>
									<h1
										className={`ml-12 font-extrabold text-2xl font-custom mb-2 ${
											hoveredIndex === index
												? "text-green-600 translate-y-[-30px] md:translate-y-[-30px] transform transition-delay-100"
												: "text-white"
										}`}
									>
										{event.header}
									</h1>
									<h1
										className={`ml-12 font-bold font-custom ${
											hoveredIndex === index
												? "text-black translate-y-[-30px] md:translate-y-[-30px] transform transition-delay-100"
												: "text-white"
										}`}
									>
										{event.location}
									</h1>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* <div className="border h-[50vh] bgco" style={{ backgroundImage:one }}>

      </div> */}
			{
				<div className=" mt-48 bg-gray-100 ">
					<Footer />
				</div>
			}
		</div>
	);
};

export default HomePage;
