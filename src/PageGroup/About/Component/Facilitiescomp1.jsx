import React from "react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function Facilitiescomp1({ num1, images, content, heading }) {
  // check odd or even
  const isEven = (num) => {
    return num1 % 2 === 0;
  };
  const [currentindex, setcurrentindex] = useState(0);
  // Previous and Next Button
  const prev = () => {
    if (currentindex === 0) {
      setcurrentindex(images.length - 1);
    } else {
      setcurrentindex((currentindex - 1) % images.length);
    }
  };
  const next = () => {
    setcurrentindex((currentindex + 1) % images.length);
  };

  // Auto Slide
  useEffect(() => {
    const intervalid = setInterval(() => {
      setcurrentindex((currentindex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalid);
  }, [currentindex]);

  return (
    <div
      className={`mx-auto my-14 flex w-[90%] flex-wrap-reverse justify-between md:flex-nowrap text-justify ${
        isEven() ? "flex-row-" : "flex-row-reverse"
      }`}
    >
      <div
        className=" relative mx-auto flex h-64 w-[90%] rounded-2xl border-2 border-black  border-t-0 md:border-t-2 bg-cover bg-center shadow-2xl md:h-80 md:w-[33%] transition-all rounded-t-none md:rounded-t-2xl"
        style={{ backgroundImage: `url(${images[currentindex]})` }}
      >
        <ChevronLeft
          className=" absolute left-0 top-[50%] cursor-pointer rounded-xl bg-white bg-opacity-50"
          onClick={prev}
        />
        <ChevronRight
          className="absolute right-0 top-[50%] cursor-pointer rounded-xl bg-white bg-opacity-50"
          onClick={next}
        />
      </div>
      <div className="group mx-auto flex w-[90%] flex-col md:my-0 md:w-[55%]">
        <h1 className="mb-2 px-6 text-3xl font-medium text-green-yellow">
          {heading}
        </h1>
        <div className="ml-7 mb-5 h-[5px] w-[70px] bg-green-yellow rounded-3xl transition-all duration-200 ease-in-out group-hover:w-[200px]"></div>
        <p className="flex-1 rounded-3xl bg-green-light p-6 shadow-2xl rounded-b-none md:rounded-b-3xl border-black border-2 border-b-0 md:border-b-2 md:border-none">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Facilitiescomp1;
