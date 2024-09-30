import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import devData from "../../../../data/developer";

const GridItem = ({ name, desg, degree, img, github, insta, linkedin }) => {
  return (
    <div className="relative mb-8 flex items-center justify-center">
      <img
        className="absolute top-[-42%] z-10 h-[150px] w-[150px] rounded-full border-2 border-green-700 object-cover"
        src={`${img}`}
        alt="Avatar"
      />
      <div className="relative z-0 rounded-xl border-2 border-green-900 bg-[#d7ffdab0] md:h-[100%]">
        <div className="mt-8 px-16 pb-4 pt-8 text-center md:mt-8 md:px-24">
          <div className="mb-1 text-xl font-semibold text-[#000]">{name}</div>
          <div className="mb-2 text-lg font-semibold text-[#0f4003]">
            {desg}
          </div>
          <div className="text-md mb-2 text-gray-800">{degree}</div>
          <a
            className="cursor-pointer"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="mr-4 text-2xl text-[#046B09]"
              icon={faGithub}
            />
          </a>
          <a
            className="cursor-pointer"
            href={insta}
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
  );
};

const Grid = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mt-8 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-24 p-8 sm:grid-cols-2 md:mt-0 lg:grid-cols-3 xl:grid-cols-3">
        {devData[1].map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
