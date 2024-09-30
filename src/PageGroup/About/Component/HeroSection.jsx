const HeroSection = ({ heading, image }) => {
  return (
    <>
      <div
        className="h-72 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex h-72 w-full items-center justify-center backdrop-blur-sm">
          <div className="flex h-32 w-full items-center justify-center bg-green-700 bg-opacity-50">
            <h2 className="text-center text-3xl font-semibold uppercase text-gray-200">
              {heading}
            </h2>
          </div>
        </div>
      </div>
      <div className="-mt-12 h-16 w-full backdrop-blur-[1.4px]" />
    </>
  );
};

export default HeroSection;
