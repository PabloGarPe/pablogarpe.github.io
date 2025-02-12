"use client"

import { useState, useEffect } from "react"

export const Header = () => {
    const [opacity, setOpacity] = useState(1)
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY
            const newOpacity = Math.max(0.1, 1 - currentScroll / 300);
            setOpacity(newOpacity);
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

  return (
    <header className="mx-auto w-full border-b border-gray-50/0 ease-in-out flex-none sticky top-0 transition-opacity z-40" style={{ opacity }}>
      <div className="absolute inset-0" style={{ backgroundColor: `rgba(255, 255, 255, ${1 - opacity})` }}></div>
      <div className="relative md:px-3 text-default md:grid md:grid-cols-3 px-3 py-3 w-full">
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
        <nav className="hidden md:flex md:w-auto w-full items-center md:justify-self-center md:mx-5 text-default">
          <ul className="flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-2 md:w-auto w-full tracking-[0.05em] font-bold">
            <li>
              <a className="px-4 py-3 hover:bg-white hover:text-black hover:rounded-full hover:shadow-inner" href="/#home">
                Home
              </a>
            </li>
            <li>
              <a className="px-4 py-3 hover:bg-white hover:text-black hover:rounded-full hover:shadow-inner" href="/#info">
                About Me
              </a>
            </li>
            <li>
              <a className="px-4 py-3 hover:bg-white hover:text-black hover:rounded-full hover:shadow-inner" href="/#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="px-4 py-3 hover:bg-white hover:text-black hover:rounded-full hover:shadow-inner" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className = "md:flex md:flex-col hidden w-full md:items-end md:justify-self-end">
            <button className = "bg-pink-500 hover:bg-pink-300 font-bold px-4 py-2 rounded-md text-white transition-colors">Resume</button>
        </div>
      </div>
    </header>
  );
};
