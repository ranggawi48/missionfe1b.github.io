import React, { useState } from "react";
import NavbarNav from "./NavbarNav";
import SubMenu from "./SubMenu";
import logo from "../../../assets/logo.png";
import logo2 from "../../../assets/logo2.png";
import user from "/icon/user-1.jpg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-background">
      <div
        className="relative h-14 md:h-20 flex justify-start items-center px-5 md:px-10 lg:px-20 gap-2"
      >
        <a href="/home" className="mr-5 md:mr-8">
          <img
            src={logo}
            alt="logo"
            className="hidden md:block w-full h-auto md"
          />
          <img
            src={logo2}
            alt="logo2"
            className="block md:hidden w-full mr-4 ml-1 pl-2"
          />
        </a>
        <NavbarNav />
        <div className="flex items-center relative right-16 md:right-0 md:ml-auto">
          <img
            src={user}
            alt="User"
            className="w-7 h-7 md:w-15 md:h-15 rounded-full cursor-pointer z-[1001]"
            onClick={toggleMenu}
          />
          <div
            className="ml-4 text-white text-lg cursor-pointer z-[1001]"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute right-2 w-48 rounded-lg shadow-md mt-2 z-50">
            <SubMenu />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
