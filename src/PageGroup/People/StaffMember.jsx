import HeroSection from "../About/Component/HeroSection";
import Compforstaff from "./Component/CompforStaff";
import staffMembers from "../../../data/StaffMember.js";
function StaffMember() {
  return (
    <div>
      <HeroSection heading={"Staff Member"} image={staffMembers[0]} />
      <div className=" mx-auto mb-8 md:w-[90%] overflow-auto">
        <table className="mx-auto table">
          <thead>
            <tr>
              <th className="min-w-[100px] md:w-1/6 bg-green-yellow text-white">S.No.</th>
              <th className="min-w-[200px] w-2/6 bg-green-yellow text-white">Name</th>
              <th className="min-w-[200px] w-3/6 bg-green-yellow text-white">Designation</th>
            </tr>
          </thead>
          <tbody>
            {staffMembers[1].map((item, index) => {
              return (
                <Compforstaff
                  key={index}
                  sno={index + 1}
                  name={item.name}
                  designation={item.designation}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default StaffMember;
