import { createHashRouter } from "react-router-dom";

import AboutDept from "./PageGroup/About/AboutDept";
import AboutJMI from "./PageGroup/About/AboutJMI";
import Achievments from "./PageGroup/About/Achievments";
import Facilities from "./PageGroup/About/Facilities";
import MessageHOD from "./PageGroup/About/MessageHOD";
import Testimonials from "./PageGroup/About/Testimonials";
import CourseOffered from "./PageGroup/Academic/CourseOffered";
import CourseStructure from "./PageGroup/Academic/CourseStructure";
import Notices from "./PageGroup/Academic/Notices";
import Event from "./PageGroup/Event/Event";
import Gallery from "./PageGroup/Gallery/Gallery";
import Home from "./PageGroup/Home/Home";
import Placement from "./PageGroup/Placement/Placement";
import Developer from "./PageGroup/People/Developer";
import Faculty from "./PageGroup/People/Faculty";
import PhdScholar from "./PageGroup/People/PhdScholar";
import StaffMember from "./PageGroup/People/StaffMember";
import Students from "./PageGroup/People/Students";
import Project from "./PageGroup/Research/Project";
import Publication from "./PageGroup/Research/Publication";
import ResearchArea from "./PageGroup/Research/ResearchArea";
import Layout from "./Layout";
import AboutProf from "./PageGroup/People/Component/AboutProf";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about/aboutjmi",
        element: <AboutJMI />,
      },
      {
        path: "about/aboutDept",
        element: <AboutDept />,
      },
      {
        path: "about/messageHOD",
        element: <MessageHOD />,
      },
      {
        path: "about/facilities",
        element: <Facilities />,
      },
      {
        path: "about/testimonials",
        element: <Testimonials />,
      },
      {
        path: "about/achievements",
        element: <Achievments />,
      },
      {
        path: "academic/courseOffered",
        element: <CourseOffered />,
      },
      {
        path: "academic/courseStructure",
        element: <CourseStructure />,
      },
      {
        path: "academic/notices",
        element: <Notices />,
      },
      {
        path: "event",
        element: <Event />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "placement",
        element: <Placement />,
      },
      {
        path: "people/faculty",
        element: <Faculty />,
      },
      {
        path: "people/staffMember",
        element: <StaffMember />,
      },
      {
        path: "people/students",
        element: <Students />,
      },
      {
        path: "people/phdScholar",
        element: <PhdScholar />,
      },
      {
        path: "people/developer",
        element: <Developer />,
      },
      {
        path: "research/project",
        element: <Project />,
      },
      {
        path: "research/publication",
        element: <Publication />,
      },
      {
        path: "research/researchArea",
        element: <ResearchArea />,
      },
      {
        path: "people/faculty/professor",
        element: <AboutProf />,
      },
    ],
  },
]);
export default router;
