import Facilitiescomp1 from "./Component/Facilitiescomp1";
import FacilitiesData from "../../../data/FacilitiesData.js";
import HeroSection from "./Component/HeroSection";
function Facilities() {
  console.log(FacilitiesData);
  return (
    <div>
      <HeroSection heading={"Facilities"} image={FacilitiesData[0].images[0]} />
      {FacilitiesData.map((item, index) => {
        return (
          <Facilitiescomp1
            key={index}
            num1={index}
            images={item.images}
            content={item.content}
            heading={item.heading}
          />
        );
      })}
    </div>
  );
}
export default Facilities;
