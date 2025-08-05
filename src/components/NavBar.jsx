import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { LINKS } from "../constants";

import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 flex w-full flex-col items-center justify-center md:top-4">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <img src={logo} alt="logo" width={80} height={22} />
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((item, index) => {
            return (
              <a
                key={index}
                href={`${item.targetId}`}
                className={`text-sm text-white ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} transition-all duration-300 hover:opacity-50`}
                onClick={(e) => handleScroll(e, item.targetId)}
              >
                {item.text}
              </a>
            );
          })}
        </div>
        {/* Mobile Menu */}
        <div className="text-white lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="transa w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((item, index) => {
            return (
              <a
                key={index}
                href={`${item.targetId}`}
                className="block p-4 tracking-tighter text-white uppercase"
                onClick={(e) => handleScroll(e, item.targetId)}
              >
                {item.text}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
