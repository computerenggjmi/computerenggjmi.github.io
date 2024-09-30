const Why = ({ course_title, text }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <h2 className="text-center text-3xl font-semibold">
        <span className="text-green-deep">Why {course_title} from </span>
        Jamia Millia Islamia?
      </h2>
      <div className="mx-4 flex flex-col justify-center text-pretty text-justify rounded-md bg-green-light p-6 text-lg sm:mx-8 md:mx-12 lg:mx-16">
        {text}
      </div>
    </div>
  );
};

export default Why;
