import { useState } from "react";
import HeroSection from "../About/Component/HeroSection";
import PhdScholars from "../../../data/PhdScholar";

// *****************************component for phd scholar*****************
function CompforPhdScholar({ sno, name, supervisor, title, year }) {
  return (
    <tr>
      <td className=" bg-slate-200 text-center">{sno}</td>
      <td className=" bg-slate-200 text-left">{name}</td>
      <td className=" bg-slate-200 text-left">{supervisor}</td>
      <td className=" bg-slate-200 text-left">{title}</td>
      <td className=" bg-slate-200 text-center">{year}</td>
    </tr>
  );
}

// *****************************main function **********************
function PhdScholar() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <HeroSection heading={"Phd Scholar"} image={PhdScholars[0]} />
      <div className=" mx-auto flex w-full flex-wrap-reverse justify-center rounded-lg bg-green-yellow p-5 text-black md:w-[90%]">
        <h1 className="w-[100%] text-center text-2xl font-bold text-white md:w-[55%] md:pr-16 md:text-right">
          PHD Scholar ({index ? "Awarded" : "Ongoing"})
        </h1>
        <select
          className="mb-5 w-[50%] bg-green-500 p-1 font-bold md:mb-0 md:w-[20%] md:p-0"
          onChange={(e) => setIndex(e.target.selectedIndex)}
        >
          <option value="">Ongoing</option>
          <option value="">Awarded</option>
        </select>
      </div>
      <div className=" mx-auto mb-8 overflow-auto md:w-[90%] shadow-slate-500 shadow-2xl">
        <table className="mx-auto table w-full">
          <thead>
            <tr>
              <th className="w-1/12 min-w-[100px] bg-green-yellow text-white">
                S.No.
              </th>
              <th className="w-4/12 min-w-[200px] bg-green-yellow text-white">
                Name
              </th>
              <th className="w-4/12 min-w-[200px] bg-green-yellow text-white">
                Supervisor
              </th>
              <th className="w-4/12 min-w-[500px] bg-green-yellow text-white">
                Title
              </th>
              <th className="w-4/12 min-w-[100px] bg-green-yellow text-white">
                {index ? "Awarded " : "Registration "}Year
              </th>
            </tr>
          </thead>
          <tbody>
            {PhdScholars[index + 1].map((item, index) => {
              return (
                <CompforPhdScholar
                  key={index}
                  sno={index + 1}
                  name={item.name}
                  supervisor={item.supervisor}
                  title={item.title}
                  year={item.year}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default PhdScholar;
