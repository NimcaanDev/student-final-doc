import React from "react";

const Doc = ({
  fileId,
  fileType,
  fileName,
  courseName,
  shift,
  classIdentify,
  size
}) => {
  return (
    <a
      href={`https://drive.google.com/uc?export=download&id=${fileId}`}
      download
    >
      <div className="doc p-4 shadow-box bg-white hover:bg-gray-200 transition rounded-md flex flex-col gap-3">
        <div className="cover-part h-20 mx-auto">
          <img
            src={`/studentdocs/assets/${fileType.toLowerCase()}.png`}
            className="h-full"
          />
        </div>
        <div className="doc-info">
          <div className="doc-name font-bold text-xl">{fileName}</div>
          <div className="course-name text-gray-800">{courseName}</div>
          <div className="doc-size text-gray-500 text-sm">{size}</div>
          <div className="sub-info flex justify-between mt-3">
            <div className="shift text-gray-800">{shift}</div>
            <div className="class-name text-gray-800 font-bold">
              {classIdentify}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Doc;
