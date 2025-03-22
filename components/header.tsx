"use client";

import { useState, useEffect } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`mx-auto w-full transition-opacity duration-[0.15s] ease-in-out flex-none sticky top-0 z-50 ${
        scrolled && !menuOpen
          ? "backdrop-blur-[6px] shadow-md shadow-gray-900 border-b border-gray-400"
          : ""
      }
      `}
    >
      <div
        className={`absolute z-0 transition-opacity duration-300 ease-in-out w-full h-full top-0 left-0
           ${scrolled && !menuOpen ? "scrolled" : ""}`}
      ></div>
      <div className="relative md:px-3 text-default md:grid md:grid-cols-[0.2fr_2fr_auto] px-3 py-3 w-full">
        <div className="hidden md:flex justify-between md:jsutify-self-start">
          <a
            className="text-decoration-none flex items-center mr-auto"
            href="/"
          >
            <span className="ml-10 font-bold md:text-xl text-2xl whitespace-nowrap">
              Pablo García
            </span>
          </a>
        </div>
        <nav className="hidden md:flex md:w-auto w-full items-center md:justify-center md:justify-self-center md:mx-3 text-default">
          <ul className="flex flex-col md:flex-row md:space-x-3 md:space-y-0 space-y-2 md:w-auto w-full tracking-[0.05em] font-bold flex-nowrap">
            <li>
              <a
                className="px-4 py-3 hover:bg-white hover:text-black hover:rounded-full hover:shadow-inner"
                href="/#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="px-4 py-3 hover:bg-white hover:text-black hover:rounded-full hover:shadow-inner"
                href="/#info"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="px-4 py-3 hover:bg-white hover:text-black hover:rounded-full hover:shadow-inner"
                href="/#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="px-4 py-3 hover:bg-white hover:text-black hover:rounded-full hover:shadow-inner"
                href="mailto:pablogarciapernas@gmail.com"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <nav className="md:hidden grid grid-cols-2 space-x-10 justify-center text-default relative w-full">
          <a
            className="text-decoration-none flex items-center mr-auto"
            href="/"
          >
            <span className="ml-10 font-bold md:text-xl text-2xl whitespace-nowrap">
              Pablo García
            </span>
          </a>
          <div className="flex justify-end">
            <button
              className="bg-pink-500 hover:bg-pink-300 font-bold px-4 py-2 rounded-full text-white transition-colors w-20"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Menu
            </button>
          </div>
          {menuOpen && (
            <div className="dropdown fixed right-0 w-52 mt-16 bg-black text-white overflow-hidden border border-gray-400 rounded-md shadow-md">
              <ul className="flex flex-col justify-end items-end space-y-10 tracking-[0.05em] font-bold flex-nowrap overflow-hidden p-4 py-10">
                <li>
                  <a
                    className="px-4 py-3 hover:bg-gray-200 hover:text-black hover:rounded-full hover:shadow-inner overflow-hidden"
                    href="/#home"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="px-4 py-3 hover:bg-gray-200 hover:text-black hover:rounded-full hover:shadow-inner overflow-hidden"
                    href="/#info"
                    onClick={() => setMenuOpen(false)}
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    className="px-4 py-3 hover:bg-gray-200 hover:text-black hover:rounded-full hover:shadow-inner overflow-hidden"
                    href="/#projects"
                    onClick={() => setMenuOpen(false)}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="px-4 py-3 hover:bg-gray-200 hover:text-black hover:rounded-full hover:shadow-inner overflow-hidden"
                    href="mailto:pablogarciapernas@gmail.com"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/Curriculum.pdf"
                    download="Pablo_Garcia_Curriculum.pdf"
                    className="bg-pink-500 hover:bg-pink-300 font-bold px-4 py-2 rounded-full text-white transition-colors"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
        <div className="md:flex md:flex-col hidden md:items-end md:justify-self-end">
          <a
            href="/Curriculum.pdf"
            download="Pablo_Garcia_Curriculum.pdf"
            className="bg-pink-500 hover:bg-pink-300 font-bold px-4 py-2 rounded-full text-white transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};
