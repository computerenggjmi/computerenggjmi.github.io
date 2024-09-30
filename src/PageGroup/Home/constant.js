export const routes = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About",
    link: "/about/aboutjmi",

    subRoutes: [
      { link: "/about/aboutjmi", name: "About Jamia" },
      { link: "/about/aboutDept", name: "About Department" },
      { link: "/about/messageHOD", name: "Message From HOD" },
      { link: "/about/achievements", name: "Achievements" },
      { link: "/about/facilities", name: "Facilities" },
      { link: "/about/testimonials", name: "Testimonials" },
    ],
  },
  {
    name: "Academic",
    link: "/services",

    subRoutes: [
      { link: "/academic/courseOffered", name: "Programs Offered" },
      { link: "/academic/courseStructure", name: "Program Structure" },
    ],
  },
  {
    name: "People",
    subRoutes: [
      { link: "/people/faculty", name: "Faculty Members" },
      { link: "/people/staffMember", name: "Staff Members" },
      { link: "/people/students", name: "Students" },
      { link: "/people/phdScholar", name: "Ph.D Scholars" },
      { link: "/people/developer", name: "Developer" },
    ],
  },
  {
    name: "Event",
    link: "/event",
  },
  {
    name: "Placement",
    link: "/placement"
  },
  {
    name: "Research",
    subRoutes: [
      { link: "/research/project", name: "Projects" },
      { link: "/research/publication", name: "Publication" },
      { link: "/research/researchArea", name: "Research Area" },
    ],
  },
  {
    name: "Gallery",
    link: "/Gallery",
  },
];
