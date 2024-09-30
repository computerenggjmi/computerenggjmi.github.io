const PSOCard = ({ title, text }) => {
  return (
    <div className="group relative col-span-1 flex items-center justify-center overflow-hidden rounded-md text-green-800 shadow">
      <div className="flex h-full w-full items-center justify-between gap-x-3 bg-green-light p-4 text-base">
        <h3 className="font-semibold">{title}</h3>
        <div className="h-full w-2 rounded bg-green-700 transition-all duration-300 group-hover:h-[60%]" />
        <p className="text-black">{text}</p>
      </div>
    </div>
  );
};

export default PSOCard;
