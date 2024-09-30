import { useEffect } from "react";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { useLocation } from "react-router-dom";
import HeroSection from "../../About/Component/HeroSection";
import image from "../../About/assets/aboutjmi.jpeg";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

const AboutProf = () => {
  const HODIcon = {
    fontSize: "2rem",
    color: "green",
    display: "inline",
    marginRight: "3%",
  };
  const FacultyIcon = {
    fontSize: "1rem",
    color: "green",
    display: "inline",
    marginRight: "3%",
  };
  const location = useLocation();
  const { fromHome } = location.state;
  let professor = fromHome.professor || fromHome.HOD;
  useEffect(() => {
    console.log(professor);
  });
  return (
    <div>
      <HeroSection
        heading={"Department of Computer Engineering"}
        image={image}
      />
      <div className="flex w-full -translate-y-20 flex-col justify-start gap-x-24 gap-y-6 rounded-md px-10 sm:flex-row sm:items-center sm:gap-y-0 sm:px-8 md:px-12 lg:px-16">
        <img
          id="Government"
          alt="Prof. Bashir Alam"
          src={professor.dp}
          className="h-48 w-48 translate-y-12 rounded-md object-cover object-top shadow-lg shadow-gray-500 drop-shadow-lg transition duration-300 hover:scale-105"
        />

        <div className="flex h-fit translate-y-12 flex-col border-l-4 border-green-deep px-4 font-semibold">
          <span className="text-green-deep">{professor.name}</span>
          <span className="">{professor.designation}</span>
          <span className="tex-gray-light mb-3 italic">
            {professor.areaOfIntrest}
          </span>

          {professor.email ? (
            <p>
              <IoIosMail style={FacultyIcon} />
              {professor.email}
            </p>
          ) : null}
          {professor.mobileNumber ? (
            <p>
              <IoIosCall style={FacultyIcon} />
              {professor.mobileNumber}
            </p>
          ) : null}
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-[90%] rounded-3xl bg-green-light px-4 pb-6 pt-5 text-lg md:px-12">
        <div className=" mb-5 border-l-2 border-green-yellow px-4">
          {professor.areaOfInterest}
        </div>
        <div className="my-6 px-0 text-justify text-base md:px-4 md:text-lg">
          {professor.details}
        </div>
      </div>
      {/* <div className=" mx-auto my-20 flex max-w-[90%] flex-wrap justify-between md:flex-nowrap"> */}
      {/* <div className=" mx-auto mb-14 w-[90%] rounded-3xl bg-green-yellow text-white md:mx-0 md:mb-0 md:w-[45%]">
          <h1 className=" py-4 text-center text-lg font-bold">VISION</h1>
          <q className=" block px-9 py-4 text-xl leading-loose">
            To produce excellent professionals and innovators in the field of
            Computer Engineering for the economic development and global
            competitiveness of the nation.
          </q>
        </div> */}
      {/* <div className="mx-auto w-[90%] rounded-3xl bg-green-light md:mx-0 md:w-[45%]">
          <h1 className=" py-4 text-center text-lg font-bold">MISSION</h1>
          <ul className=" mx-auto w-[90%] list-disc">
            <li>
              To impart proactive education that focuses on intellectually
              vibrant instructions, sound practical training learning and
              project-based learning.
            </li>
            <li>
              To prepare the students for high-quality research and industry
              oriented innovation.
            </li>
            <li>
              To prepare the students for immediate career success and lifelong
              challenges global in global industrial needs.
            </li>
            <li className="mb-6">
              To educate the students and to make them ethically and socially
              responsible citizens for national and global development.
            </li>
          </ul>
        </div> */}
      {/* </div> */}
      <div>
        <div className="group relative col-span-1 mb-12 mt-12 flex justify-end overflow-hidden rounded-md  px-20 ">
          <div className="rounded-md bg-[#d7ffdab0] p-2 hover:bg-green-700">
            <a href={professor.pdf} className="no-underline ">
              <h3
                className="font-semibold"
                style={{ fontSize: "20px", marginRight: "30px" }}
              >
                <p className="inline-block">
                  <AiOutlineDownload className="inline-block" /> View Profile
                </p>
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutProf;
