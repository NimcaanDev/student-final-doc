import React, { useState, useEffect } from "react";
import SideBar from "./sidebar";
import MainSection from "./main-section";
import faculties from "../data/faculties";

const content = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(faculties[0]);

  return (
    <div className="content flex mt-2 gap-3 px-3 md:pr-6 md:px-0 relative">
      <SideBar faculties={faculties} setSelectedFaculty={setSelectedFaculty} />
      <MainSection selectedFaculty={selectedFaculty} />
    </div>
  );
};

export default content;
