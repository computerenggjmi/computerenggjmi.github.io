import { react, useState } from "react";
import "./index.css";
import Header from "./Component/Header";
import Coordinator from "./Component/Coordinator";
import MyCarousel from "./Component/Carousel";
import TableComponent from "./Component/Table";

function Placement() {
  return (
    <section>
      <Header></Header>
      <section >
        <div
          className="group relative col-span-1 ml-6 flex h-12 overflow-hidden rounded-md text-green-800 sm:ml-8 text-justify"
          style={{ marginTop: "30px" }}
        >
          <h3
            className="font-bold text-black"
            style={{ fontSize: "25px", marginLeft: "10px" }}
          >
            Placement Records
          </h3>
          <div className="absolute bottom-1 h-[5px] w-[60px] rounded bg-green-700 transition-all duration-300 group-hover:w-[10%] sm:left-2" />
        </div>
      </section>

      <MyCarousel />

      <Coordinator />

      <TableComponent />
    </section>
  );
}
export default Placement;
