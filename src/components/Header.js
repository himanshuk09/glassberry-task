import React, { useState } from "react";
import { MenuIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent fixed w-[100%] z-20" data-aos="fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src={logo} alt="Logo" />
          </div>

          <div className="hidden md:flex row justify-between w-[40%]">
            <nav className="hidden md:flex space-x-10">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`${item.toLowerCase()}`}
                  className="text-white hover:text-gray-300 hover:rounded-s-md relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-between space-x-4">
              <SearchIcon className="h-6 w-6 text-white hover:text-gray-300 cursor-pointer" />
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white" data-aos="fade-left">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={`${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
