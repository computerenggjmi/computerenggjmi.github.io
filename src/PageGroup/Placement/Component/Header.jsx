const Header = () => {
  return (
    <div>
      <div>
        <h1 className="heading h-[100px] w-full bg-[color:var(--green-deep)] text-2xl text-white">
          Placements
        </h1>
      </div>
      <div className="subHeading flex flex-col sm:flex-row">
        <div className="sm:w-1/3 sm:mr-4">
          <h3 className="mb-2 hover:bg-[#7ec769ec] text-center hover:text-black bg-[color:var(--dark-black)] px-6 py-4 text-white sm:mb-0">
            <a href="https://forms.gle/ZxhzPSRU214uiXKM6" target="_blank"> Placement Details for 2022 Batch (Btech) </a>
          </h3>
        </div>
        <div className="sm:w-1/3 sm:mr-4">
          <h3 className="mb-2 hover:bg-[#7ec769ec] text-center hover:text-black bg-[color:var(--dark-black)] px-6 py-4 text-white sm:mb-0">
            <a href="https://forms.gle/XSN2mrt6Pm5jp3Xm6" target="_blank">Placement Registration for 2024 Batch (Btech/Mtech)</a>
          </h3>
        </div>
        <div className="sm:w-1/3">
          <h3 className="mb-2 hover:bg-[#7ec769ec] text-center hover:text-black bg-[color:var(--dark-black)] px-6 py-4 text-white sm:mb-0">
            <a href="https://forms.gle/VUVVj45Z3ZpTkHWN9" target="_blank">Placement Details for Mtech Computer Engg. student</a>
          </h3>
        </div>
      </div>

      <div>
        <div className="group relative col-span-1 m-10 flex items-center justify-center overflow-hidden rounded-md text-green-800 shadow">
          <div className="flex w-full flex-col gap-y-3 bg-green-light px-5 py-5 pl-6 text-sm sm:px-8 sm:pl-8 md:px-12">
            <p className="font-normal text-black text-justify">
              Campus Placement is the facility given by the University Placement
              Cell to the Department of Computer Engineering to provide jobs for
              students pursuing B.Tech. and M.Tech. Computer Engineering
              programs. In this facility, the national and multinational
              companies visit the college to select students depending on their
              ability to work, capability, focus, and aim. The major objective
              of campus placement is to provide job opportunities for students
              before they complete their education. There is a pre-placement
              talk for the students which includes a presentation about the
              company. The presentation includes information like selection
              procedure, company’s milestones, organizational achievements,
              candidate scope of improvement within the organization if
              selected, salary, employment benefits. Different companies that
              visit the campus for placements have certain procedures that is
              set by companies for selection of appropriate candidates. These
              procedures may be different from company to company.
            </p>
          </div>
          <div className="absolute left-2 h-[80%] w-[6px] rounded bg-green-700 transition-all duration-300 group-hover:h-[60%] sm:left-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
