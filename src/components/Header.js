import React from "react";
import TaiwoLogo from "./TaiwoLogo";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <div>
      <header>
        <ul className="flex items-center gap-6 md:gap-24 mt-6 mb-6 md:mt-24 mx-6 md:mx-24 ">
          <li>
            <TaiwoLogo />
          </li>
          <li className={`font-poppins cursor-pointer text-lg md:text-2xl ${location.pathname === '/home' ? 'font-bold': ''}`}>
            <Link to={"/home"}>Home</Link>
          </li>
          <li className={`font-poppins cursor-pointer text-ta-blue text-lg md:text-2xl ${location.pathname === '/about' ? 'font-bold': ''}`}>
            <Link to={"/about"}>About</Link>
          </li>
          <li className={`font-poppins cursor-pointer text-ta-green text-lg md:text-2xl ${location.pathname === '/projects' ? 'font-bold': ''}`}>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li className={`font-poppins cursor-pointer text-ta-red text-lg md:text-2xl ${location.pathname === '/contact' ? 'font-bold': ''}`}>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <ul className="w-full flex justify-end">
            <li className="">
              <a
                className="font-poppins cursor-pointer text-ta-purple text-lg md:text-2xl flex items-center gap-2"
                href={"/cv.pdf"}
                download={"Taiwo Ayoola.pdf"}
              >
                <span>Resume</span> <FaCloudDownloadAlt />
              </a>
            </li>
          </ul>
        </ul>
      </header>
    </div>
  );
};
