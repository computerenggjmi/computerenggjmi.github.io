const Coordinator = () => {
    return(
        <section>
        <div className="m-8 flex flex-col items-center justify-center md:flex-row md:justify-evenly">
          <div>
            <div className="shd mb-10 h-[311px] w-[309px] rounded-lg bg-[url('/src/PageGroup/Placement/assets/shahzadSir.jpeg')] bg-contain md:mb-0"></div>
          </div>
          <div className="px-4 text-center md:max-w-sm md:text-left lg:max-w-lg">
            <h3 className="mb-3 text-[22px] font-bold text-[color:var(--green-deep)]">
              Teacher Placement Coordinator
            </h3>
            <p className="font-medium leading-8 text-[#585858] text-justify">
              Jamia Millia Islamia continues to be ranked as the top university
              of the country and among the best in the world. Jamia Milllia
              Islamia attracts the brightest students...{" "}
            </p>
            <p className="mb-2 text-[15px] font-medium text-[color:var(--green-deep)]">
              Read More &gt;&gt;
            </p>
            <h4 className="mb-2 text-[18px] font-medium">Dr. Shahzad Alam</h4>
            <p className="mb-2 text-[18px] font-medium text-[#585858]">
              Assistant professor, Department of Computer Engg.
            </p>
          </div>
        </div>
      </section>
    );
};

export default Coordinator;