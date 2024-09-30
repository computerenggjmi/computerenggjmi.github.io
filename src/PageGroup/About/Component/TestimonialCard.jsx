const TestimonialCard = ({ text, name, batch, img }) => {
  return (
    <div className="col-span-1 flex h-fit max-w-[22rem] flex-col gap-y-2 rounded-md bg-green-light p-2 shadow sm:p-4 md:p-6 text-justify">
      <div className="relative flex w-full items-center justify-center">
        <div className="absolute left-0 top-0 h-6 w-6 border-l-[3px] border-t-[3px] border-gray-700" />
        <img
          id="Government"
          alt="Image"
          src={img}
          className="h-24 w-24 rounded-full border-[3px] border-green-yellow object-cover object-top"
        />

        <div className="absolute bottom-0 right-0 h-6 w-6 border-b-[3px] border-r-[3px] border-gray-700" />
      </div>
      <div
        // id="custom-scrollbar"
        className="relative h-48 w-full overflow-y-auto scroll-smooth whitespace-break-spaces first-letter:font-semibold"
      >
        {text}
      </div>
      <hr />
      <div className="w-full text-end font-semibold text-green-deep">
        {name}
      </div>
      <div className="-mt-2 w-full text-end text-sm font-semibold text-gray-800">
        {batch}
      </div>
    </div>
  );
};

export default TestimonialCard;
