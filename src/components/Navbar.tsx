"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed z-50 flex items-center justify-between transition-all duration-500
      ${/* Base: Mobile (and Desktop Scrolled) styles */ ""}
      bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-lg px-6 py-0 rounded-lg
      bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg ring-1 ring-black/5

      ${/* Desktop Overrides */ ""}
      md:bottom-auto
      ${isScrolled 
        ? "md:top-2" // Keep base styles (glass pill)
        : "md:top-2 md:w-[95%] md:max-w-5xl md:px-0 md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none md:ring-0 md:pointer-events-none" // Remove glass styles
      }
    `}>
      
      {/* Icon */}
      <div className={`transition-all duration-500 ${!isScrolled ? "md:pointer-events-auto md:bg-white/70 md:backdrop-blur-sm md:rounded-lg md:p-1  md:border md:border-white/20" : ""}`}>
        <Link href="/" className="p-2 -ml-2 md:ml-0 rounded-lg hover:bg-black/5 transition-colors text-gray-700 hover:text-black block">
          <div className="flex items-center gap-2">

          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          
          </div>
        </Link>
      </div>

      {/* Links */}
      <div className={`flex gap-6 text-sm font-medium text-gray-800 transition-all duration-500
        ${!isScrolled ? "md:pointer-events-auto md:px-6 md:py-2 md:bg-white/70 md:backdrop-blur-sm md:rounded-lg md:shadow-sm md:border md:border-white/20" : ""}
      `}>
        <Link 
          href="/projects" 
          className="hover:text-black transition-colors relative group"
        >
          /Projects
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
        </Link>
        <Link 
          href="/#experience" 
          className="hover:text-black transition-colors relative group"
        >
          /Experience
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
        </Link>
        <Link 
          href="/#socials" 
          className="hover:text-black transition-colors relative group"
        >
          /Socials
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
