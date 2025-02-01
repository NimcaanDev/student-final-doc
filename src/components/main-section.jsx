import React, { useEffect, useState } from "react";
import Doc from "./doc";
import { useDispatch, useSelector } from "react-redux";
import { getDocuments } from "../../redux/slices/documentSlices/documentSlice";
import Loading from "./loading";
import ErrorAlert from "./errorAlert";

const MainSection = () => {
  const documentState = useSelector(state => state.document)
  const facultyState = useSelector(state => state.faculty)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDocuments())
  }, [dispatch])

  const documents = documentState?.data?.documents || [];

  const filteredData = documents.filter((doc) => {
    const selectedFaculty = facultyState?.selectedFaculty;

    if (!selectedFaculty || Object.keys(selectedFaculty)?.length === 0) {
      return true;
    }

    return doc?.faculty.id === selectedFaculty.faculty?.id;
  });

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
          ) : filteredData.length > 0 ? (
            <div className="docs grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {/* here */}
              {filteredData.map((document) => (
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
