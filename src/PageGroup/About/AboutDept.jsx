import HeroSection from "./Component/HeroSection";
import image from "./assets/aboutjmi.jpeg";

function AboutDept() {
  return (
    <div>
      <HeroSection
        heading={"Department of Computer Engineering"}
        image={image}
      />
      <div className="mx-auto mt-6 max-w-[90%] rounded-3xl bg-green-light px-2 md:px-12 pb-6 pt-5 text-justify text-lg">
        <div className="mb-5 border-l-2 border-green-yellow px-4">
          <span className=" text-xl text-green-deep">
            The Department of Computer Engineering{" "}
          </span>
          was established in the year 2000. Since its inception, the department
          has evolved and has become one of the leading departments at the
          Faculty of Engineering and Technology.
        </div>
        <div className=" my-6 px-4">
          In response to current market trends, the Department of Computer
          Engineering has added new courses. Currently, two undergraduate
          programs are offered: B.Tech in Computer Engineering and B.Tech in
          Computer Science & Engineering (Data Sciences) (Self-Financed). Both
          programs are fully equipped with subjects that meet industry needs,
          aiming to make students market-ready. Notably, students have the
          option to earn a B.Tech in Computer Engineering with honors by taking
          additional credits, further enhancing their academic credentials. The
          department also offers two master&apos;s programs: M.Tech in Computer
          Engineering (AI & ML) and M.Tech in Data Science(Self-Financed), with
          a focus on research in AI, NLP, soft computing, and computer networks.
          We have been approached by leading companies such as Adobe, Google,
          and Microsoft for placements.
        </div>
        <div className=" my-6 px-4">
          Additionally, the department runs a Ph.D. program, with several
          research scholars working in the fields of Networking, Data Mining,
          Machine Learning, and Artificial Intelligence. The faculty members
          have produced numerous research papers in reputable national and
          international journals and conferences. They have also authored
          several books in the field of Computer Engineering and are actively
          involved in advancing the department&apos;s standing.
        </div>
        <div className=" my-6 px-4">
          Apart from the curriculum, the department organizes lectures for
          students on various technical and non-technical topics, delivered by
          industry professionals.
        </div>
        <div className=" my-6 px-4">
          The department has been diligent in securing placements for its
          students. We were fortunate to receive accreditation from TCS, and
          with visits from other companies, most students have found placements.
          Companies like TCS, HCL, HP, Adobe, Aricent, Accenture, BirlaSoft, and
          NewGen have visited the department for campus recruitment in recent
          years.
        </div>
        <div className=" mt-6 border-r-2 border-green-yellow px-4">
          The Department of Computer Engineering is also an institutional member
          of the Computer Society of India and has an active student chapter
          that successfully conducts an annual cultural and technical fest,
          along with various other events throughout the year. We also have a
          Linux user group that actively works to enhance student&aapos;s skills
          in Linux.
        </div>
      </div>
      <div className=" mx-auto my-20 flex max-w-[90%] flex-wrap justify-between md:flex-nowrap">
        <div className=" mx-auto mb-14 w-[90%] rounded-3xl bg-green-yellow text-white md:mx-0 md:mb-0 md:w-[45%]">
          <h1 className=" py-4 text-center text-lg font-bold">VISION</h1>
          <q className=" block px-9 py-4 text-xl leading-loose">
            To produce excellent professionals and innovators in the field of
            Computer Engineering for the economic development and global
            competitiveness of the nation.
          </q>
        </div>
        <div className="mx-auto w-[90%] rounded-3xl bg-green-light md:mx-0 md:w-[45%]">
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
        </div>
      </div>
      <div className="bg-green-deep text-white">Computer engineering</div>
    </div>
  );
}
export default AboutDept;
