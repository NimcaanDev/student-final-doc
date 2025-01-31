import React, { useEffect, useState } from "react";
import Doc from "./doc";
import { useDispatch, useSelector } from "react-redux";
import { getDocuments } from "../../redux/slices/documentSlices/documentSlice";
import Loading from "./loading";
import ErrorAlert from "./errorAlert";

const MainSection = () => {
  const documentState = useSelector(state => state.document)
  const facultyState = useSelector(state => state.faculty)

  const [selectedYear, setSelectedYear] = useState(
    facultyState?.selectedFaculty?.classes?.[0]?.year
  );


  const dispatch = useDispatch()
  console.log(facultyState.selectedFaculty)
  useEffect(() => {
    dispatch(getDocuments())
  }, [dispatch])

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
      <div className="docs-part">

        {documentState.error ? (
          <ErrorAlert message={documentState.error} />
        ) : (
          documentState.isLoading ? (
            <div className="mt-6 z-[-1]">
              <Loading />
            </div>
          ) : documentState.data && documentState.data.documents ? (
            <div className="docs grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {documentState.data.documents.map((document) => (
                <Doc
                  key={document.id}
                  id={document.id}
                  fileType={document.file_type}
                  fileName={document.name}
                  courseName={document.course?.name || "Unknown"}
                  shift={"morning"}
                  size={document.size}
                />
              ))}
            </div>
          ) : (
            <p>No documents found</p>
          )
        )}
      </div>
    </div>
  );
};

export default MainSection;
