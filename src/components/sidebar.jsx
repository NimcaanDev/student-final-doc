import React, { useState } from "react";
import { useSelector } from "react-redux";

const SideBar = ({ faculties, setSelectedFaculty }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isClosed = useSelector(state => state.sideBar.isClosed)
  console.log(isClosed)
  const sideBarClickHandler = (index) => {
    setActiveIndex(index);
    setSelectedFaculty(faculties[index]);
  };

  return (

    <div
      className={`side-bar flex-col justify-between h-[100vh] bg-black w-1/2 md:w-1/3 xl:w-1/5 px-6 py-4 top-[0rem] fixed right-0 md:sticky md:left-0 md:top-0 flex  md:transition-none transition duration-300 md:translate-x-0 ${!isClosed ? "translate-x-0" : "translate-x-96"}`}
    >
      <div className="side-bar-upper-part">
        <div className="side-bar-title text-yellow-200 text-xl">Faculty</div>
        <ul className="text-white flex flex-col gap-1 mt-2">
          {faculties.map((faculty, index) => (
            <li
              key={index}
              className={`cursor-pointer transition py-1 px-4 ${activeIndex != index
                ? " hover:border hover:border-white"
                : "bg-white text-black"
                }`}
              onClick={() => sideBarClickHandler(index)}
            >
              {faculty.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="side-bar-lower-part">
        <div className="text-white">Report</div>
      </div>
    </div>
  );
};

export default SideBar;
