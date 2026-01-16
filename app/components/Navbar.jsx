"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed  top-0 left-0 w-full z-50 px-[5vw] py-[1vw]">
      <nav className="flex justify-between items-center text-[#97B320]">
        <div className="text-[4vw] md:text-[1.5vw] font-bold">SSA</div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex gap-[2vw] text-[1.1vw]">
          <li>About Us</li>
          <li>Matches</li>
          <li>Programs</li>
          <li>Coaches</li>
          <li>Amenities</li>
          <li>Events</li>
          <li>News</li>
          <li>Blogs</li>
        </ul>

        {/* Humburger Menu */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>
      </nav>

      {/* Mobile Navbar */}

      {open && (
        <div className="md:hidden">
          <ul className="flex flex-col text-[3vw] gap-[3vw] mt-[2vw]">
            <li>About Us</li>
            <li>Matches</li>
            <li>Programs</li>
            <li>Coaches</li>
            <li>Amenities</li>
            <li>Events</li>
            <li>News</li>
            <li>Blogs</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
