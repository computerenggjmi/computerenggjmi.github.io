const Spc = (props) => {
  const { name, year, email, img, github, linkedin, whatsapp } = props.spc;
  return (
    <div className="sm:w-full md:w-1/2 lg:w-2/5 p-2">
      <div className="circle"></div>
      <div className="mt-4 max-w-[500px] rounded-3xl border-2 border-[color:var(--green-deep)] bg-white p-4 shadow-md">
        <div className="flex items-center md:items-start flex-col md:flex-row">
          <div className="circle-container w-[100px] h-[100px]">
            <img src={`${img}`} alt="" className="object-cover" />
          </div>
          <div className="hidden md:block mx-4 h-[130px] w-[4px] rounded-md bg-[color:var(--green-deep)]"></div>
          <div className="md:ml-4 mt-4 md:mt-0">
            <h3 className="mb-2 text-[20px] font-medium">
              {name}
            </h3>
            <p className="mb-1.5 text-lg font-medium text-[color:var(--green-deep)]">
              {year}
            </p>
            <p className="mb-1.5 break-all text-pretty text-lg font-medium text-[color:var(--green-deep)] overflow-hidden">
              {email}
            </p>
            <div className="mt-5 flex w-24 justify-between">
              <a href={github} target="_blank">
                <i className="fa-brands fa-github fa-lg cursor-pointer"></i>
              </a>
              <a href={linkedin} target="_blank">
                <i className="fa-brands fa-linkedin fa-lg cursor-pointer"></i>
              </a>
              <a href={whatsapp} target="_blank">
                <i className="fa-brands fa-square-whatsapp fa-lg cursor-pointer"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spc;

