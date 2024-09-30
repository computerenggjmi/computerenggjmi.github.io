import { ChevronLeft, ChevronRight } from "react-feather";
import { images } from "../../../../data/home";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JmiCarousel = () => {
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
    <div className="relative grid h-full w-full place-items-center">
      <div
        className="group absolute top-0 mx-auto h-64 w-[90%] scale-100 rounded-md bg-cover bg-center shadow-2xl blur-sm transition-all md:h-[470px] md:w-[90%]"
        style={{ backgroundImage: `url(${images[currentindex]})` }}
      />
      <div
        className="group m-auto flex h-64 w-[90%] scale-95 rounded-md bg-cover bg-center shadow-2xl transition-all md:h-[470px] md:w-[90%]"
        style={{ backgroundImage: `url(${images[currentindex]})` }}
      >
        <ChevronLeft
          className="absolute left-0 top-[50%] cursor-pointer rounded-xl bg-white bg-opacity-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          onClick={prev}
        />
        <ChevronRight
          className="absolute right-0 top-[50%] cursor-pointer rounded-xl bg-white bg-opacity-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          onClick={next}
        />
      </div>
      <div className="group relative col-span-1 mb-5 ml-auto mr-[3%] flex h-12 w-fit justify-end overflow-hidden rounded-md text-black ">
        <Link to="/gallery">
          <h3 className="mr-8 text-xl font-semibold">
            View More
            <div className="bottom-2 right-20 h-[5px] w-full rounded bg-green-700 transition-all duration-300 group-hover:w-[80%] sm:left-4" />
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default JmiCarousel;
