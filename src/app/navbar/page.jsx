'use client';

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Members", href: "#members" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
  ];

  const dropdownItems = [
    { label: "FAQ", href: "#faq" },
    { label: "Careers", href: "#careers" },
    { label: "Team", href: "#team" },

  ];

  return (
    <nav className="bg-white px-6 py-4 top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img
            src="https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/6544d646d9038f9e168d428d_logo.svg"
            alt="Logo"
            className="w-[70px] object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-800">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-black hover:bg-gray-100 hover:border-2 border-gray-400 rounded-2xl p-2 "
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Dropdown Item */}
          <li
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a
              href="#pages"
              className="hover:text-black hover:bg-gray-100 hover:border-2 border-gray-400 rounded-2xl p-2 "
            >
              Pages ▾
            </a>

            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-lg w-40 z-50">
                {dropdownItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-700 bg-[#f9f8f7]">
            0
          </div>
          <button className="px-5 py-1.5 bg-[#f9f8f7] border border-gray-300 rounded-full text-sm text-gray-800 hover:bg-gray-100 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Toggle */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-white shadow-md rounded-b-lg">
          <ul className="flex flex-col gap-4 px-6 py-4 text-sm font-medium text-gray-800">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="block py-2">
                  {item.label}
                </a>
              </li>
            ))}

            {/* Dropdown in mobile menu */}
            <li>
              <span className="block py-2">Pages</span>
              <ul className="pl-4">
                {dropdownItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="block py-2 text-sm">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <div className="flex items-center gap-3 px-6 pb-4">
            <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-700 bg-[#f9f8f7]">
              0
            </div>
            <button className="px-5 py-1.5 bg-[#f9f8f7] border border-gray-300 rounded-full text-sm text-gray-800">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
