const CoverTitle = ({ text }) => {
  return (
    <div className="group relative w-fit text-lg font-semibold">
      <p className="w-fit">{text}</p>
      <div className="absolute -bottom-1 left-0 h-1 w-[75%] rounded bg-green-deep transition-all duration-300 group-hover:w-full" />
    </div>
  );
};

export default CoverTitle;
