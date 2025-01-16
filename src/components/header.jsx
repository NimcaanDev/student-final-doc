import React from "react";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../context/sideBarContext";

const Header = () => {
  const navigate = useNavigate()
  const { toggleSidebar } = useSidebar();

  const toUploadPage = () => {
    navigate("pages/uploadPage");
  }

  return (
    <div className="header bg-black p-4 px-3 md:px-6 flex justify-between items-center sticky top-0 z-50 md:static">
      <div className="logo font-konit text-yellow-200 text-3xl">
        StudentDocs
      </div>
      <div className="right-part flex gap-4 items-center">
        <div className="upload border-2 border-white text-white py-1 px-5 transition hover:bg-yellow-200 hover:text-black cursor-pointer hover:border-yellow-200" onClick={toUploadPage}>
          Upload
        </div>
        <div className="block md:hidden cursor-pointer" onClick={toggleSidebar}>
          <i className="fa-solid fa-bars text-white text-3xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
