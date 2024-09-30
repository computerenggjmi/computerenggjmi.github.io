const DEFAULT_SEMESTER = "Semester-1";

export const CourseStructureFilters = ({
  options,
  selectedCourse,
  setSelectedCourse,
  selectedSemester,
  setSelectedSemester,
}) => {
  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    setSelectedSemester(DEFAULT_SEMESTER);
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  return (
    <div className="flex items-center justify-end">
      <div className="">
        <label
          htmlFor="course"
          className="text-sm font-semibold uppercase text-gray-100"
        >
          Course:
        </label>
        <select
          id="course"
          value={selectedCourse}
          onChange={handleCourseChange}
          className="text-sm font-semibold uppercase"
        >
          {options.map((option) => (
            <option key={option.course} value={option.course}>
              {option.course}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        <label
          htmlFor="semester"
          className="text-sm font-semibold uppercase text-gray-100"
        >
          Semester:
        </label>
        <select
          id="semester"
          value={selectedSemester}
          onChange={handleSemesterChange}
          className="text-sm font-semibold uppercase"
        >
          {options
            .find((option) => option.course === selectedCourse)
            .semester.map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};
