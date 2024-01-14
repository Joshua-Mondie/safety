import BodyA from "./BodyA";
import BodyB from "./BodyB";
import BodyC from "./BodyC";
import Footer from "./Footer";
import Header from "./Header";
// import Header from "./Header";
import RecentNews from "./RecentNews";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <div className="mt-32">
        {/* <div className=" mx-64  z-0"> */}
          <BodyA />
        {/* </div> */}
          <RecentNews />
        <div className=" h-[577px] mt-20 mb-20">
          <BodyB />
        </div>
        {/* <div className="mx-64 mb-20"> */}

        {/* </div> */}
        {/* <div className="mx-56"> */}
          <BodyC />
        {/* </div> */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
