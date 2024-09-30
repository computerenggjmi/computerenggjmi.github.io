import hatImage from "../assets/academic-hat.svg";
import rupee from "../assets/rupee.svg";
import clock from "../assets/clock.svg";
const Ribbon = ({ intake, fee, duration }) => {
  return (
    <div className="flex h-1 w-full bg-green-deep">
      <div className="relative flex w-full items-center justify-evenly">
        <div className="flex w-1/4 flex-col items-center gap-y-2">
          <img
            src={hatImage}
            alt="academic"
            className="absolute -top-10 h-20 w-20 rounded-full border-[3px] border-green-yellow bg-gray-900 p-3"
          />
          <h2 className="mt-32 text-center text-2xl font-semibold">
            Intake-{intake}
          </h2>
        </div>
        <div className="flex w-1/4 flex-col items-center gap-y-2">
          <img
            src={rupee}
            alt="money"
            className="absolute -top-10 h-20 w-20 rounded-full border-[3px] border-green-yellow bg-gray-900 p-3"
          />
          <h2 className="mt-32 text-center text-2xl font-semibold">₹{fee}</h2>
        </div>
        <div className="flex w-1/4 flex-col items-center gap-y-2">
          <img
            src={clock}
            alt="time"
            className="absolute -top-10 h-20 w-20 rounded-full border-[3px] border-green-yellow bg-gray-900 p-5"
          />
          <h2 className="mt-32 text-center text-2xl font-semibold">
            {duration}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
