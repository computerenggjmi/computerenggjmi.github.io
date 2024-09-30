import HeroSection from "../About/Component/HeroSection";
import ResearchAreas from "../../../data/ResearchArea";


// *****************************component for research area*****************
function Compforresearch({sno,area,name}){
    console.log(sno,area,name);
    return (
        <tr>
            <td className=" text-center bg-slate-200">{sno}</td>
            <td className=" text-left bg-slate-200">{area}</td>
            <td className=" text-left bg-slate-200">{name}</td>
        </tr>
    );
}

// ***************************main function***************************
function ResearchArea() {
    return (
        <div>
          <HeroSection heading={"Research Area"} image={ResearchAreas[0]} />
          <div className=" mx-auto mb-8 md:w-[90%] overflow-auto">
            <table className="mx-auto table w-full">
              <thead>
                <tr>
                  <th className="min-w-[100px] w-1/12 bg-green-yellow text-white">S.No.</th>
                  <th className="min-w-[200px] w-4/12 bg-green-yellow text-white">Research Area</th>
                  <th className="min-w-[400px] w-7/12 bg-green-yellow text-white">Name</th>
                </tr>
              </thead>
              <tbody>
                {ResearchAreas[1].map((item, index) => {
                  return (
                    <Compforresearch
                      key={index}
                      sno={index + 1}
                      area={item.area}
                      name={item.faculties}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
}
export default ResearchArea;