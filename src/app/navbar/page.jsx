'use client';

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

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
    <nav className="bg-white px-6 py-6 top-0 left-0 right-0 z-50 relative">
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
                className="p-2 border-2 border-white  rounded-2xl hover:text-black hover:bg-gray-100  "
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Mega Menu Item */}
          <li
            className="relative group"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <a
              href="#pages"
              className="p-2 border-2 border-white  hover:text-black hover:bg-gray-100 rounded-2xl   "
            >
              Pages ▾
            </a>

            {/* Mega Menu Dropdown */}
            {megaMenuOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 -ml-[205px] mt-5">
                <div className="bg-gray-900 text-white p-10 rounded-3xl w-[1300px]">
                  <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative w-97 h-95">
                        <img
                          src="https://assets-global.website-files.com/6544a331d4f63b5b4c8cfa4f/6548b29c25f97ae612531edc_features-02.webp"
                          alt="Testimonial"
                          className="w-80 h-full object-cover rounded-xl"
                           />
                        <div className="backdrop-blur-xl absolute bottom-0 left-0 w-90 p-2 mx-3 mb-5 rounded-xl border-2 border-gray-700">
                          <p className="text-white text-xl font-medium">
                            "Halsa is a game-changer in my daily life."
                          </p>
                          <div className="flex items-center mt-3 gap-2">
                            <img
                              src="https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654b81dc36c9b5bbbc207b65_person-01.webp"
                              alt="Emma Thompson"
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <div className="flex text-yellow-400 text-sm">★★★★★</div>
                              <p className="text-sm text-white">Emma Thompson</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
                      <div>
                        <h3 className="text-white font-semibold mb-2 text-xl">Pages</h3>
                        <ul className="space-y-1 text-gray-300 text-xl">
                          <li>
                            <a href="#" className="hover:text-white transition-colors">Home</a>
                          </li>
                          <li>
                            <a href="#" className="hover:text-white transition-colors">Features</a>
                          </li>
                          <li>
                            <a href="#" className="hover:text-white transition-colors">About</a>
                          </li>
                          <li>
                            <a href="#" className="hover:text-white transition-colors">Members</a>
                          </li>
                          <li>
                            <a href="#" className="hover:text-white transition-colors">Contact</a>
                          </li>
                           <div class="ext-start">
                            <button class="bg-white text-gray-900 font-medium px-4 py-1 mt-5 t rounded-full shadow hover:bg-gray-100 transition-colors">
                              More Templates
                            </button>
                          </div>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2 text-xl">CMS</h3>
                        <ul className="space-y-1 text-gray-300 text-xl">
                          <li>
                            <a href="#" className="hover:text-white transition-colors">Blog</a>
                          </li>
                          <li>
                            <a href="#" className="hover:text-white transition-colors">Blog Single</a>
                          </li>
                          <li>
                            <a href="#" className="hover:text-white transition-colors">Jobs</a>
                          </li>
                          <li>
                            <a href="#" className="hover:text-white transition-colors">Job Single</a>
                          </li>
                          <li>
                            <a href="#" className="hover:text-white transition-colors">Pricing</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2 text-xl">Utility Pages</h3>
                        <ul className="space-y-1 text-gray-300 text-xl">
                          <li>
                            <a href="#" className="hover:text-white transition-colors">404 Error Page</a>
                          </li>
                          <li>
                            <a href="#" className="hover:text-white transition-colors">Password Protected</a>
                          </li>
                          <li>
                            <a href="#" className="hover:text-white transition-colors">Styleguide</a>
                          </li>
                          <li>
                            <a href="#" className="hover:text-white transition-colors">Licensing</a>
                          </li>
                          <li>
                            <a href="#" className="hover:text-white transition-colors">Changelog</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-700 bg-[#f9f8f7]">
            0
          </div>
          <button className="px-5 py-1.5 bg-[#f9f8f7] border border-gray-300 rounded-full text-sm text-gray-800 hover:bg-gray-100 transition ">
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
            <button className="px-5 py-1.5 bg-[#f9f8f7] border border-gray-300 rounded-full text-sm text-gray-800 ">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;