import { useState,useEffect } from "react";
import HeroSection from "../About/Component/HeroSection";
import Students123 from "../../../data/Students";
// *****************************component for phd scholar*****************
function CompforStudents({ sno, name, rollno }) {
  return (
    <tr>
      <td className=" bg-slate-200 text-center">{sno}</td>
      <td className=" bg-slate-200 text-left">{rollno}</td>
      <td className=" bg-slate-200 text-left">{name}</td>
    </tr>
  );
}

// *****************************main function **********************
function Students() {
  const [i, seti] = useState(0);
  const [j, setj] = useState(0);
  const [optio,setoption]=useState(Students123[3].filter((item,index)=>item.id===i))

  useEffect(() => {
    setoption(Students123[3].filter((item,index)=>item.id===i+1))
  },[i])
  return (
    <div className=" bg-green-100 bg-opacity-[0.3]">
      {/* ***********************************Hero section*******************/}
      <HeroSection heading={"Students"} image={Students123[0]} />
      {/***************************************filter****************************/}
      <div className=" mx-auto flex w-full flex-wrap-reverse justify-center rounded-lg bg-green-yellow p-5 text-black md:w-[70%]">
        <h1 className="w-[100%] text-center text-2xl font-bold text-white md:w-[50%] md:pr-16 md:text-right">
          Students({i ? (j?`M.Tech,${optio[j-1].value}`:"M.Tech,2023-2025") :( j?`B.Tech,${optio[j-1].value}`:"B.Tech,2022-2026")})
        </h1>
        {/*****************************first dropdown***********************************/}
        <select
          className="mb-5 w-[50%] mr-5 bg-green-500 p-1 font-bold md:mb-0 md:w-[20%] md:p-0"
          onChange={(e) => seti(e.target.selectedIndex)}
        >
          <option value="">B.Tech</option>
          <option value="">M.Tech</option>
        </select>
        {/*****************************second dropdown*********************************/}
        <select
          className="mb-5 w-[50%] bg-green-500 p-1 font-bold md:mb-0 md:w-[20%] md:p-0"
          onChange={(e) => setj(e.target.selectedIndex)}
        >
          {
            i?<option value="">2023-2025</option>: <option value="">2022-2026</option>
          }
          {
            optio.map((item,index)=>{
              return(
                <option value="">{item.value}</option>
              )
            })
          }
        </select>
      </div>
      {/***********************************table***********************************/}
      <div className=" mx-auto mb-8 overflow-auto bg-green-100 bg-opacity-[0.3] shadow-2xl shadow-slate-500 md:w-[70%]">
        <table className="mx-auto table w-full">
          <thead>
            <tr>
              <th className="w-1/12 min-w-[80px] bg-green-yellow text-white">
                S.No.
              </th>
              <th className="w-4/12 min-w-[145px] bg-green-yellow text-white">
                Roll No
              </th>
              <th className="w-7/12 min-w-[180px] bg-green-yellow text-white">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {Students123[i + 1][j].map((item, index) => {
              return (
                <CompforStudents
                  key={index}
                  sno={index + 1}
                  name={item.name}
                  rollno={item.rollNo}
                />
              );
            })}
          </tbody>
        </table>
        {Students123[i + 1][j].length === 0 ? (
          <div className=" w-[100%] rounded-lg bg-slate-500 p-5 text-center font-bold">
            Data Not Found
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Students;
