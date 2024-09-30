import { useState,useEffect } from "react";
import HeroSection from "../About/Component/HeroSection";
import ProjectData from "../../../data/ProjectData";
// *****************************component for phd scholar*****************
function CompforStudents({ sno, name, rollno,title,superVisor }) {
  return (
    <tr>
      <td className=" bg-slate-200 text-center">{sno}</td>
      <td className=" bg-slate-200 text-left">{title}</td>
      {/* <td className=" bg-slate-200 text-center">{superVisor}</td> */}
      <td className=" bg-slate-200 text-left">{name}</td>
      <td className=" bg-slate-200 text-left">{rollno}</td>
    </tr>
  );
}

// *****************************main function **********************
function Project() {
  const [i, seti] = useState(0);
  const [j, setj] = useState(0);
  return (
    <div className=" bg-green-100 bg-opacity-[0.3]">
      {/* ***********************************Hero section*******************/}
      <HeroSection heading={"Students"} image={ProjectData[0]} />
      {/***************************************filter****************************/}
      <div className=" mx-auto flex w-full flex-wrap justify-center rounded-lg bg-green-yellow p-5 text-black md:w-[90%]">
        <h1 className="w-[100%] text-center text-xl md:text-3xl font-bold text-white md:w-[50%] md:pr-16 md:text-right mb-5 md:mb-0">
          Projects ( {i ? (j?`Major,${ProjectData[3][j-1].value}`:"Major,2020-2024") :( j?`Minor,${ProjectData[3][j-1].value}`:"Minor,2021-2025")} )
        </h1>
        {/*****************************first dropdown***********************************/}
        <select
          className="mb-5 mr-3 w-[45%] md:mr-5 bg-green-500 p-1 font-bold md:mb-0 md:w-[20%] md:p-0"
          onChange={(e) => seti(e.target.selectedIndex)}
        >
          <option value="">Minor</option>
          <option value="">Major</option>
        </select>
        {/*****************************second dropdown*********************************/}
        <select
          className="mb-5 w-[45%] bg-green-500 p-1 font-bold md:mb-0 md:w-[20%] md:p-0"
          onChange={(e) => setj(e.target.selectedIndex)}
        >
           <option value="">2021-2025</option> 
          {
            ProjectData[3].map((item,index)=>{
              return(
                <option value="">{item.value}</option>
              )
            })
          }
        </select>
      </div>
      {/***********************************table***********************************/}
      <div className=" mx-auto mb-8 overflow-auto bg-green-100 bg-opacity-[0.3] shadow-2xl shadow-slate-500 md:w-[90%]">
        <table className="mx-auto table w-full">
          <thead>
            <tr>
              <th className="w-1/12 min-w-[80px] bg-green-yellow text-white">
                S.No.
              </th>
              <th className="w-5/12 min-w-[320px] bg-green-yellow text-white">
                Title
              </th>
              {/* <th className="w-2/12 min-w-[180px] bg-green-yellow text-white">
                Supervisor
              </th> */}
              <th className="w-3/12 min-w-[180px] bg-green-yellow text-white">
                Name
              </th>
              <th className="w-2/12 min-w-[145px] bg-green-yellow text-white">
                Roll No
              </th>
            </tr>
          </thead>
          <tbody>
            {ProjectData[i + 1][j].map((item, index) => {
              return (
                <CompforStudents
                  key={index}
                  sno={index + 1}
                  name={item.name}
                  rollno={item.rollNo}
                  title={item.title}
                  superVisor={item.supervisor}
                />
              );
            })}
          </tbody>
        </table>
        {ProjectData[i + 1][j].length === 0 ? (
          <div className=" w-[100%] rounded-lg bg-slate-500 p-5 text-center font-bold">
            Data Not Found
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Project;
