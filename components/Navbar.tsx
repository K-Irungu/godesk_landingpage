"use client";

import React, { useState } from "react";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
    // When search bar is toggled, ensure mobile menu is closed
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    // When mobile menu is toggled, ensure search bar is closed
    if (showSearchBar) {
      setShowSearchBar(false);
    }
  };

  return (
    // Navbar Container - Fixed position for xl and above, relative for smaller screens
    <nav className="bg-transparent relative w-full z-50 top-0 start-0 border-b-[0.5px] border-white/70 xl:fixed">
      <div className="max-w-screen-full flex items-center justify-between mx-auto p-9"> {/* Added justify-between here */}

        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse"> {/* Removed px-10 */}
          <img src="/images/logo.png" className="h-6 sm:h-9" alt="Logo" />
        </a>

        {/* Mobile Toggle Button (Hamburger Icon) - Visible until xl breakpoint */}
        {/* Placed it next to the logo for justify-between to work */}
        <div className="flex xl:hidden order-2 z-50"> {/* Ensured z-index is high enough */}
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={showMobileMenu ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {showMobileMenu ? (
              <FaTimes className="w-5 h-5 text-black" /> 
            ) : (
              <FaBars className="w-5 h-5 text-black" />
            )}
          </button>
        </div>

        {/* Desktop Navigation & Search Section - Hidden until xl breakpoint, then visible */}
        <div
          className="hidden w-full md:flex :w-full xl:order-1 items-center justify-between px-10"
          id="navbar-sticky"
        >
          {/* Main Menu Items */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:mt-0 font-medium md:space-x-12 rtl:space-x-reverse md:flex-row md:border-0 md:bg-transparent">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Secondary Menu Items & Search Icon */}
          <div className="flex flex-col md:flex-row md:items-center p-4 md:p-0 mt-4 md:mt-0 font-medium md:space-x-6 lg:space-x-8 rtl:space-x-reverse">
            <ul className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Checkout
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Cart
                </a>
              </li>
            </ul>
            {/* Search Icon - Toggles search bar visibility */}
            <button
              type="button"
              onClick={toggleSearchBar}
              className="p-2 text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200 md:ml-4 border-l-[0.5px] border-l-white/70 h-full"
            >
              <FaSearch className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Overlay - Appears below the navbar (desktop only) */}
      {showSearchBar && (
        <div className="absolute top-full right-0 w-full md:w-96 bg-white rounded-b-lg py-3 px-6 shadow-lg transition-all duration-300 ease-in-out hidden xl:block z-40">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow p-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={toggleSearchBar}
              className="ml-4 p-2 text-gray-500 hover:text-gray-800 focus:outline-none cursor-pointer"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay - Appears below the navbar (mobile only) */}
      {showMobileMenu && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg xl:hidden z-40 overflow-y-auto"
             style={{ height: 'calc(100vh - 96px)' }}> {/* Adjust 96px based on your actual navbar height */}

          <ul className="flex flex-col p-4 font-medium border-t border-gray-100">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Contact Us
              </a>
            </li>
            {/* Secondary menu items for mobile */}
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md mt-2 border-t border-gray-100 pt-3"
              >
                My Account
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Checkout
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Cart
              </a>
            </li>
            {/* Optional: Mobile search input within the menu */}
            <li className="mt-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-grow p-2 text-gray-800 border-none focus:outline-none bg-transparent"
                />
                <FaSearch className="w-5 h-5 text-gray-500 mr-2" />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;