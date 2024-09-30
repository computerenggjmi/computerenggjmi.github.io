import train from "../../../assets/icons8-train.png";
import plane from "../../../assets/icons8-plane.png";
import bus from "../../../assets/icons8-bus.png";
import railway from "../../../assets/icons8-railway.png";
import { HOW_TO_REACH } from "../../../../data/home";

const Map = () => {
  return (
    <div className="">
      <div className="dotted-line"></div>
      <div className="reach-methods">
        <div className="reach-point flex flex-row">
          <img className="reach-icon" src={train} alt="train" />
          <span className="flex flex-col text-pretty px-2 text-gray-300">
            <h3 className="text-lg font-semibold">METRO</h3>
            {HOW_TO_REACH.metro}
          </span>
        </div>
        <div className="reach-point flex flex-row">
          <img className="reach-icon" src={plane} alt="train" />
          <span className="flex flex-col text-pretty px-2 text-gray-300">
            <h3 className="text-lg font-semibold">
              INDRA GANDHI INTERNATIONAL AIRPORT
            </h3>
            {HOW_TO_REACH.airport}
          </span>
        </div>
        <div className="reach-point flex flex-row">
          <img className="reach-icon" src={bus} alt="train" />
          <span className="flex flex-col text-pretty px-2 text-gray-300">
            <h3 className="text-lg font-semibold">BUS STATION</h3>
            {HOW_TO_REACH.bus}
          </span>
        </div>
        <div className="reach-point flex flex-row">
          <img className="reach-icon" src={railway} alt="train" />
          <span className="flex flex-col text-pretty px-2 text-gray-300">
            <h3 className="text-lg font-semibold">NEW DELHI RAILWAY STATION</h3>
            {HOW_TO_REACH.railway}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Map;
