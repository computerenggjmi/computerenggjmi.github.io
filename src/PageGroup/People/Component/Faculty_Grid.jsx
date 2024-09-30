import React from "react";
import devData from "../../../../data/developer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Item = ({ name, designation, img, mail, linkedin }) => {
  return (
    <div className="relative mb-12 flex items-center justify-center ">
      <img
        className="absolute top-[-40%] z-10 h-[150px] w-[150px] rounded-full border-2 border-green-700 object-cover"
        src={`${img}`}
        alt="Avatar"
      />
      <div className="relative z-0 min-h-[250px] sm:min-w-[400px] rounded-xl border-2 border-green-900 bg-[#d7ffdab0] md:h-[100%]">
        <div className="mt-8 max-w-[450px] px-16 pb-4 pt-8 text-center md:mt-8 md:px-12">
          <div className="mb-1 text-lg font-medium">{name}</div>
          <div className="mb-2 text-lg font-semibold text-gray-900">
            {designation}
          </div>
          <hr className="mx-auto my-4 w-4/5 border-t border-gray-300" />
          <div>
          <a
            className="cursor-pointer"
            href={mail}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="mr-4 text-2xl text-[#046B09]"
              icon={faEnvelope}
            />
          </a>
          <a
            className="cursor-pointer"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-2xl text-[#046B09]"
              icon={faLinkedin}
            />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CounsellorGrid = () => {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="mt-12 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-24 p-8 sm:grid-cols-2">
        {devData[0].map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CounsellorGrid;
