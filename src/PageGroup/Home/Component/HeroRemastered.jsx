import { useNavigate } from "react-router-dom";
import "./Hero.css";

const HeroRemastered = () => {
  const navigate = useNavigate();
  return (
    <div className="z-10 h-auto w-full bg-gradient-to-r from-black to-green-deep bg-fixed">
      <div className="flex w-full flex-col-reverse items-center justify-start px-0 py-20 sm:flex-row sm:px-5 md:px-10 lg:px-20">
        <div className="flex w-full flex-col gap-y-5 text-white">
          <div className="relative flex flex-col py-2">
            <h2 className="ml-6 text-3xl">
              Welcome to Department Of Computer Engineering
            </h2>
            <h2 className="ml-6 text-xl">  Faculty of Engineering and Technology</h2>
            <h2 className="ml-6 text-3xl text-green-yellow">
              Jamia Millia Islamia
            </h2>
            <div className="absolute inset-0 h-auto w-1 rounded bg-white" />
          </div>
          <p className="text-gray-100">
            Embark on a Journey of Knowledge, Innovation, and Transformation at
            Jamia Millia Islamia - Where Excellence Meets Diversity and Shapes
            Futures.
          </p>
          <div className="mt-4 flex gap-x-3">
            <button
              className="block w-full rounded bg-rose-600 px-12 py-3 font-semibold text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              style={{ background: "#E4FCE5", color: "#046B09" }}
              onClick={() => navigate("/about/aboutDept")}
            >
              Learn More
            </button>
            <button
              className="block w-full rounded bg-white px-12 py-3 font-semibold text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              style={{ background: "transaprent", color: "#046B09" }}
              onClick={() => navigate("#")}
            >
              Virtual Tour
            </button>
          </div>
        </div>
        <img
          src="/jmi-no-bg.svg"
          alt="jmi-logo"
          className="right-6 top-6 w-72"
        />
      </div>
    </div>
  );
};

export default HeroRemastered;
