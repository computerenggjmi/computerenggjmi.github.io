import { useNavigate } from "react-router-dom";

const HeroSection = ({ title, shortTitle, text,pageindex}) => {
  const navigate = useNavigate();
  return (
    <div className="h-auto w-full bg-gradient-to-r from-black to-green-deep bg-fixed">
      <div className="flex w-full flex-col-reverse items-center justify-start px-0 py-20 sm:flex-row sm:px-10 md:px-20 lg:px-40">
        <div className="flex w-full flex-col gap-y-5 text-white">
          <div className="relative flex flex-col py-2">
            <h2 className="ml-6 text-3xl">{title}</h2>
            <h2 className="ml-6 text-3xl text-green-yellow">({shortTitle})</h2>
            <div className="absolute inset-0 h-auto w-1 rounded bg-white" />
          </div>
          <p className="text-gray-400">{text}</p>
          <button
            className="w-fit rounded-lg border border-gray-300 px-3 py-1 text-green-yellow"
            onClick={() =>{
              if(pageindex==1){
                window.open('https://jmi.ac.in/upload/programme/cs_fet_comp_engg_btech_Data_Sciences_2025.pdf')
              }
              else if(pageindex==2){
                window.open('https://jmi.ac.in/upload/programme/cs_fet_comp_engg_mtech_Data_Sciences_2025.pdf')
              }
              else if(pageindex==3){
                window.open('https://jmi.ac.in/upload/programme/cs_fet_comp_engg_phd_2025.pdf');
              }else{
                navigate(`/academic/courseStructure?course=${shortTitle}`)  
              }
            }
            }
          >
            Program Structure {">>>"}{" "}
          </button>
        </div>
        <img
          src="/jmi-no-bg.svg"
          alt="jmi-logo"
          className="right-6 top-6 w-52"
        />
      </div>
    </div>
  );
};

export default HeroSection;
