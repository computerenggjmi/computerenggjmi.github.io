import image from "../assets/amjadSir.png";
const AvatarSection = () => {
  return (
    <div className="flex w-full -translate-y-20 flex-col justify-start gap-x-24 gap-y-6 rounded-md px-10 sm:flex-row sm:items-center sm:gap-y-0 sm:px-8 md:px-12 lg:px-16">
      <img
        id="Government"
        alt="Prof. "
        loading="eager"
        src={image}
        className="h-48 w-48 translate-y-12 rounded-md object-cover object-top shadow-lg shadow-gray-500 drop-shadow-lg transition duration-300 hover:scale-105"
      />
      <div className="flex h-fit translate-y-12 flex-col border-l-4 border-green-deep px-4 font-semibold">
        <span>Prof. Mohammad Amjad</span>
        <span>Head & Professor</span>
        <span >
          Department of Computer Engineering
        </span>
      </div>
    </div>
  );
};

export default AvatarSection;
