import { Book, Briefcase, Target, User } from "react-feather";

const PEOCard = ({ title, description, icon }) => {
  const Icon =
    icon === "User" ? (
      <User className="h-12 w-12" />
    ) : icon === "Target" ? (
      <Target className="h-12 w-12" />
    ) : icon === "Briefcase" ? (
      <Briefcase className="h-12 w-12" />
    ) : (
      <Book className="h-12 w-12" />
    );
  return (
    <div className="col-span-1 flex h-full max-w-[22rem] flex-col gap-y-4 rounded-md bg-green-light p-2 shadow sm:p-4 md:p-6">
      <div className="flex w-full items-center">
        {Icon}
        <div className="ml-4 h-1 flex-1 rounded bg-green-deep" />
      </div>
      <div className="text w-full text-pretty font-semibold">{title}</div>
      <div className="w-full text-gray-800">{description}</div>
    </div>
  );
};

export default PEOCard;
