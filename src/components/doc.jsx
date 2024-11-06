import React from "react";

const Doc = ({ fileType, fileName, courseName, shift, classIdentify }) => {
  return (
    <div className="doc p-4 shadow-box rounded-md flex flex-col gap-3">
      <div className="cover-part h-20 mx-auto">
        <img
          src={`../public/assets/${fileType.toLowerCase()}.png`}
          className="h-full"
        />
      </div>
      <div className="doc-info">
        <div className="doc-name font-bold text-xl">{fileName}</div>
        <div className="course-name text-gray-700">{courseName}</div>
        <div className="sub-info flex justify-between mt-3">
          <div className="shift text-gray-700">{shift}</div>
          <div className="class-name text-gray-700 font-bold">
            {classIdentify}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doc;
