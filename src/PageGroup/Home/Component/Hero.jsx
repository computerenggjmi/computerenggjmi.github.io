import "./Hero.css";
import HeroImg from "../assets/Jmi.png";
// import HeroImg from "/jmi-no-bg.svg";
// import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="textboxhero relative max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl sm:text-4xl">
              Welcome to Jamia Millia Islamia
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Embark on a Journey of Knowledge, Innovation, and Transformation
              at Jamia Millia Islamia - Where Excellence Meets Diversity and
              Shapes Futures.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/about/aboutDept"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                style={{ background: "#E4FCE5", color: "#046B09" }}
              >
                Learn More
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                style={{ background: "transaprent", color: "#046B09" }}
              >
                Virtual Tour
              </a>
            </div>
          </div>
          <img className="heroimg" src={HeroImg} alt="Hero" />
        </div>
      </section>

      {/* <div className="flexcontainer">
        <div className="columns">
          <h1>₹ 10 LPA</h1>
          <h3>1 in 3 B.Tech Students Placed Above</h3>
        </div>
        <div className="columns">
          <h1>₹ 10 LPA</h1>
          <h3>B.Tech Highest Salary</h3>
        </div>
        <div className="columns">
          <h1>₹ 10 LPA</h1>
          <h3>1 in 3 B.Tech Students Placed Above</h3>
        </div>
        <div className="columns">
          <h1>₹ 10 LPA</h1>
          <h3>1 in 3 B.Tech Students Placed Above</h3>
        </div>
        <div className="columns lastcol">
        <u><Link to='/placement'>Click here to know more about our placement</Link></u>
        </div>
      </div> */}
      {/* <hr></hr> */}
    </>
  );
};
