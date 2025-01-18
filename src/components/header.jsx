import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../redux/slices/sideBarSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch()

  const changeSideBarState = () => {
    dispatch(toggleSideBar())
  }

  return (
    <div className="header shadow-md bg-blue-700 p-4 px-3 md:px-6 flex justify-between items-center sticky top-0 z-50 md:static">
      <div className="logo font-konit text-white text-2xl md:text-3xl">
        StudentDocs
      </div>
      <div className="right-part flex gap-4 items-center">
        <div className="upload border-2 border-white text-white py-1 px-5 transition hover:bg-white  rounded-md hover:text-blue-700 cursor-pointer">
          <Link to='/studentdocs/upload'>Upload</Link>
        </div>
        <div>
          <Link to='/studentdocs/customer-support'>
            <div className="text-white text-xl bg-blue-800 hover:text-gray-300 px-3 py-2 rounded-full transition relative group">
              <i className="fa-solid fa-bullhorn"></i>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition w-fit">
                Help
              </span>
            </div>
          </Link>
        </div>
        <div className="block md:hidden cursor-pointer" onClick={changeSideBarState}>
          <i className="fa-solid fa-bars text-white text-3xl transition"></i>

        </div>
      </div>
    </div>
  );
};

export default Header;
