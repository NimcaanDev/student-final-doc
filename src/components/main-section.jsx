import React, { useEffect, useState } from "react";
import documents from "../data/documents";
import Doc from "./doc";
import { useDispatch, useSelector } from "react-redux";
import { getDocuments } from "../../redux/slices/documentSlice";

const MainSection = () => {
  const faculty = useSelector(state => state.faculty.faculty)
  const [selectedYear, setSelectedYear] = useState(
    faculty.classes[0].year
  );

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDocuments())
  }, [])
  // const [selectedClasses, setSelectedClasses] = useState(
  //   selectedFaculty.classes[0].classes[0]
  // );
  // const [selectedCourse, setSelectedCourse] = useState(
  //   selectedFaculty.classes[0].courses[0]
  // );

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
  };

  // const handleClassChange = (e) => {
  //   const classValue = e.target.value;
  //   setSelectedCourse(classValue);
  // };

  // const handleCourseChange = (e) => {
  //   const course = e.target.value;
  //   setSelectedCourse(course);
  // };

  return (
    <div className="main-section w-full">
      <div className="info-part flex flex-wrap gap-2 sm:gap-10 flex-col sm:flex-row md:flex-row md:justify-start justify-between">
        <div className="year-part flex gap-2">
          <div className="year-title">Year:</div>
          <select className="bg-white border rounded px-3 py-1 text-gray-700 focus:outline-none focus:ring" name="year" id="year" onChange={handleYearChange}>
            {faculty.classes.map((classItem, index) => (
              <option value={classItem.year} key={index}>
                {classItem.year}
              </option>
            ))}
          </select>
        </div>
        <div className="class-part flex gap-2">
          <div className="class-title">Class:</div>
          <select className="bg-white border rounded px-3 py-1 text-gray-700 focus:outline-none focus:ring" name="class" id="class">
            {faculty.classes
              .filter((classItem) => classItem.year === selectedYear)
              .flatMap((classItem) =>
                classItem.classes.map((className, index) => (
                  <option value={className} key={index}>
                    {className}
                  </option>
                ))
              )}
          </select>
        </div>
        <div className="course-part flex gap-2">
          <div className="course-title">Course:</div>
          <select className="bg-white border rounded px-3 py-1 text-gray-700 focus:outline-none focus:ring" name="course" id="course">
            {faculty.classes
              .filter((classItem) => classItem.year === selectedYear)
              .flatMap((classItem) =>
                classItem.courses.map((courseName, index) => (
                  <option value={courseName} key={index}>
                    {courseName}
                  </option>
                ))
              )}
          </select>
        </div>
      </div>

      <div className="divider w-full h-[1px] bg-gray-700 mt-3"></div>

      <div className="docs-part">
        <div className="docs mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {documents.map((document, index) => (
            <Doc
              key={index}
              id={document.id}
              fileId={document.fileId}
              fileType={document.format}
              fileName={document.name}
              courseName={document.course}
              shift={document.shift}
              classIdentify={document.class}
              size={document.size}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
