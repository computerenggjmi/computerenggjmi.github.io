import { useState, useEffect } from "react";
import HeroSection from "../About/Component/HeroSection";
import project_data from "../../../data/ProjectData";
import { data, options } from "../../../data/events_new.js";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
function Event() {
  const [selectedCategory, setSelectedCategory] = useState(options[0]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const newData = filterData(selectedCategory);
    setFilteredData(newData);
  }, [selectedCategory]);

  // useEffect(() => {
  // }, [filteredData]);

  const filterData = (category) => {
    const key = `${category}`;
    return data[key] || [];
  };
  return (
    <div>
      <HeroSection heading={"Computer Engineering"} image={project_data[0]} />

      <div className="mb-10 mt-10 flex w-full items-center justify-between gap-y-8 px-20 font-[450]">
        <h3 className="mb-2 px-6 text-3xl font-medium">
          <p className="relative inline-block p-2 font-semibold text-gray-900">
            Events
            <span className="absolute bottom-0 right-0 h-1 w-full rounded bg-green-800"></span>
          </p>
        </h3>

        <select
          className="bg-deep text-grey border-deep-green border-3 w-32 rounded-lg p-4 px-4 py-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="xs:px-2 flex w-full items-center justify-between gap-y-8 font-[450] md:px-20">
        {/* Display */}

        <div className="mx-2 grid grid-cols-1 gap-12 p-4 sm:grid-cols-2 md:mx-0 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((card, index) => (
            <div key={index} className="w-full p-2 text-justify">
              <div className="border-6 border-solid border-green-deep p-1">
                <div className="relative h-40 overflow-hidden rounded-t-md">
                  <img
                    className="h-full w-full rounded-t-md object-cover"
                    src={card.image}
                    alt={card.tagline}
                  />
                  {card.tagline && (
                    <p
                      className="absolute bottom-3 left-0 right-0 inline-block w-1/2 rounded-lg bg-white p-1 text-center text-sm font-semibold text-green-deep invisible md:visible"
                      style={{ margin: "0 auto" }}
                    >
                      {card.tagline}
                    </p>
                  )}
                </div>
                <div className="h-70 relative bg-green-200">
                  <div className="">
                  <div className=" h-32 mb-4 p-2 px-4 text-sm font-semibold text-gray-900 overflow-scroll">
                    {card.desc.substr(0, 250)}
                  </div>
                  </div>
                  <div className="p-2 px-4 font-semibold text-gray-900">
                    <p className=" h-12 flex pb-2">
                      <FaLocationDot />
                      <p className="ml-2">{card.venue}</p>
                    </p>
                    <p className="flex pb-2">
                      <MdOutlineAccessTimeFilled />
                      <p className="ml-2">{card.date}</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Event;
