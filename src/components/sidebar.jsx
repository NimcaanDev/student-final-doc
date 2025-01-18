import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeFaculty } from "../../redux/slices/facultySlice";
import faculties from "../data/faculties";

const SideBar = () => {
  // const faculties = useSelector(state => state.faculty.faculty)
  console.log(faculties)
  const dispatch = useDispatch()
  const [activeIndex, setActiveIndex] = useState(0);
  const isClosed = useSelector(state => state.sideBar.isClosed)
  const sideBarClickHandler = (index) => {
    setActiveIndex(index);
    dispatch(changeFaculty(faculties[index]));
  };

  return (

    <div
      className={`side-bar flex-col h-full md:h-[100vh] bg-white w-1/2 md:w-1/3 xl:w-[30%] 2xl:w-[20%] px-6 py-4 top-[4.2rem] fixed right-0 md:sticky md:left-0 md:top-0 flex shadow-md border-l-2 md:border-r-2 border-gray-400 md:transition-none transition duration-300 md:translate-x-0 ${!isClosed ? "translate-x-0" : "translate-x-96"}`}
    >
      <div className="side-bar-upper-part">
        <div className="side-bar-title text-blue-700 text-xl font-semibold">Faculty</div>
        <ul className="text-gray-800 flex flex-col gap-1 mt-2">
          {faculties.map((faculty, index) => (
            <li
              key={index}
              className={`cursor-pointer transition py-1 px-4 rounded-md ${activeIndex != index
                ? " hover:text-blue-700 hover:bg-gray-200"
                : "text-blue-700 bg-gray-200"
                }`}
              onClick={() => sideBarClickHandler(index)}
            >
              {faculty.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="side-bar-lower-part mt-10">
        <div className="text-white bg-blue-700 w-fit px-5 py-2 hover:bg-blue-800 rounded-md transition">
          <Link to='/studentdocs/project-overview'>Overview</Link>
        </div>
      </div>
    </div >
  );
};

export default SideBar;
