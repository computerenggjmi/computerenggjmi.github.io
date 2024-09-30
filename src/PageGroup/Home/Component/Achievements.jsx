import { achievementInTech as achievements } from "../../../../data/achievement";
import { Link } from "react-router-dom";
const Achievements = () => {
  return (
    <>
      <div className="group relative col-span-1 mt-8 flex h-12 w-fit rounded-md text-green-800">
        <h3 className="ml-5 w-fit text-xl font-semibold">Achievements</h3>
        <div className="absolute bottom-2 left-3 h-[5px] w-[90%] rounded bg-green-700 transition-all duration-300 group-hover:w-[70%] sm:left-4" />
      </div>

      <div className=" flex w-full flex-col items-center justify-center gap-y-8 font-[450]">
        <div className="mt-8 grid w-full grid-cols-1 gap-x-2 gap-y-6 px-6 sm:gap-x-6 sm:px-8 md:grid-cols-2 md:px-12 lg:px-16">
          {achievements.map((achievement, i) => (
            <div
              className="group relative col-span-1 flex items-center justify-center overflow-hidden rounded-md bg-green-light text-green-800 shadow"
              key={i}
            >
              <div className="flex w-full flex-col gap-y-3 bg-green-light px-4 py-4 pl-6 text-base sm:px-8 sm:pl-8 md:px-12">
                <h3 className="font-semibold">{achievement.title}</h3>
                <p className="line-clamp-3 text-black">
                  {achievement.description}
                </p>
                <Link to={`/about/achievements#${achievement.id}`}>
                  <p className="text-sm font-semibold">Read More</p>
                </Link>
              </div>
              <div className="absolute left-2 h-[80%] w-[6px] rounded bg-green-700 transition-all duration-300 group-hover:h-[60%] sm:left-4" />
            </div>
          ))}
        </div>
      </div>

      <div className="group relative col-span-1 mb-5 ml-auto mr-[3%] mt-3 flex h-12 w-fit justify-end overflow-hidden rounded-md text-black ">
        <Link to="/about/achievements">
          <h3 className="mr-8 text-xl font-semibold">
            View More
            <div className="bottom-2 right-20 h-[5px] w-full rounded bg-green-700 transition-all duration-300 group-hover:w-[80%] sm:left-4" />
          </h3>
        </Link>
      </div>
    </>
  );
};

export default Achievements;
