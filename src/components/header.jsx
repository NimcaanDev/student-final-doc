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
    <div className="header bg-black p-4 px-3 md:px-6 flex justify-between items-center sticky top-0 z-50 md:static">
      <div className="logo font-konit text-yellow-200 text-3xl">
        StudentDocs
      </div>
      <div className="right-part flex gap-4 items-center">
        <div className="upload border-2 border-white text-white py-1 px-5 transition hover:bg-yellow-200 hover:text-black cursor-pointer hover:border-yellow-200">
          <Link to='/upload'>Upload</Link>
        </div>
        <div className="block md:hidden cursor-pointer" onClick={changeSideBarState}>
          <i className="fa-solid fa-bars text-white text-3xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
