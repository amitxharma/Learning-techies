import React from "react";
import { CiSearch, CiShoppingCart, CiHeart } from "react-icons/ci";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center border-b-[2.5px]">
      <div className="flex items-center justify-center sm:justify-start m-4">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 text-white"
          fill={`${darkMode ? "white" : ""}`}
        >
          <title>Apple</title>
          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
        </svg>
        <h1
          className={`text-xl font-bold ml-2 ${darkMode ? "text-white" : ""}`}
        >
          Apple
        </h1>
      </div>
      <div className="menu flex-grow sm:flex sm:justify-center">
        <ul className="flex justify-center sm:justify-end">
          <li className="m-3">
            <a href="#" className={`${darkMode ? "text-white" : ""}`}>
              Home
            </a>
          </li>
          <li className="m-3">
            <a href="#" className={`${darkMode ? "text-white" : ""}`}>
              Shop
            </a>
          </li>
          <li className="m-3">
            <a href="#" className={`${darkMode ? "text-white" : ""}`}>
              Our Story
            </a>
          </li>
          <li className="m-3">
            <a href="#" className={`${darkMode ? "text-white" : ""}`}>
              Blog
            </a>
          </li>
          <li className="m-3">
            <a href="#" className={`${darkMode ? "text-white" : ""}`}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="login flex items-center justify-center sm:justify-end m-4">
        <div className="flex items-center">
          <div className="m-1.5">
            <CiSearch className={`${darkMode ? "text-white" : ""}`} />
          </div>
          <div className="m-1.5">
            <CiHeart className={`${darkMode ? "text-white" : ""}`} />
          </div>
          <div className="m-1.5">
            <CiShoppingCart className={`${darkMode ? "text-white" : ""}`} />
          </div>
        </div>
        <button
          className={`m-3 border-2 rounded-md px-4 py-2 ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
