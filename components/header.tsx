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

  return (
    <header
      className={`mx-auto w-full border-b transition-opacity duration-[0.15s] border-gray-50/0 ease-in-out flex-none sticky top-0 z-40 ${scrolled ? "backdrop-blur-md shadow-md" : ""}`}
    >
      <div
        className={`absolute inset-0 transition-opacity `}
        style={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.25)"
            : "transparent",
        }}
      ></div>
      <div className="relative md:px-3 text-default md:grid md:grid-cols-[0.2fr_2fr_auto] px-3 py-3 w-full">
        <div className="flex justify-between md:jsutify-self-start">
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
                href="/#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:flex md:flex-col hidden md:items-end md:justify-self-end">
          <button className="bg-pink-500 hover:bg-pink-300 font-bold px-4 py-2 rounded-full text-white transition-colors">
            Resume
          </button>
        </div>
      </div>
    </header>
  );
};
