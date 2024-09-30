import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import jmiLogo from "../../../assets/Jmi.png";
import { caraData } from "../../../../data/placement";

const MyCara = () => {
  return (
    <Carousel className="pt-4" showThumbs={false} autoPlay interval="4000" transitionTime="1000" infiniteLoop>
      {caraData.map((data, index) => (
        <Slide data={data} key={index}></Slide>
      ))}
    </Carousel>
  );
};

const Slide = (props) => {
  const { name, visited, highest, placed } = props.data;
  return (
    <div className="carousel-slide sm:h-[270px] px-10">
      <div className="flex items-center lg:px-20 md:px-8 mb-4 md:mb-0">
        <span className="mx-2 inline-block h-[43px] w-[3px] bg-white"></span>
        <div className=" text-left text-[20px] font-medium">
          {name} &nbsp; &gt;&gt;&gt;
        </div>
      </div>
      <div className="flex items-center justify-between mb-4 lg:px-24 md:px-8">
        <div className="grid grid-cols-2 grid-rows-2 gap-8">
          <div className="caraButton">
            {visited}+ <span className="text-black">Companies</span> visited
          </div>
          <div className="caraButton">
            {highest}+ lpa <span className="text-black">Highest</span> placement
          </div>
          <div className="caraButton">
            {placed}+ <span className="text-black">Students</span> placed
          </div>
          <div className="caraButton border-none bg-black text-white">
            <a href=""> Click here for more details &gt;&gt;</a>
          </div>
        </div>
        <img
          src={jmiLogo}
          alt="jmiLogo"
          className="!hidden md:!block relative -top-6 h-48 max-w-[300px] object-scale-down"
        />
      </div>
    </div>
  );
};

export default MyCara;
