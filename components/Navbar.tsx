'use client'

import React, { useState } from "react"; // Import useState
import { FaSearch, FaTimes } from "react-icons/fa"; // Import FaTimes for the close button

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false); // State to control search bar visibility

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    // Navbar Container - Fixed position, transparent background, thin bottom border
    <nav className="bg-transparent fixed w-full z-50 top-0 start-0 border-b-[0.5px] border-white/70">
      <div className="max-w-screen-full flex items-center mx-auto p-9">

        {/* Logo Section */}
        <a href="/" className="flex items-center px-10 space-x-3 rtl:space-x-reverse">
          <img src="/images/logo.png" className="h-6 sm:h-9" alt="Logo" />
        </a>

        {/* Mobile Toggle Button (Hamburger Icon) */}
        <div className="flex md:hidden order-2">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation & Search Section - Always visible */}
        <div
          className="hidden w-full md:flex md:w-full md:order-1 items-center justify-between px-10"
          id="navbar-sticky"
        >
          {/* Main Menu Items - Always visible */}
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

          {/* Secondary Menu Items & Search Icon - Always visible */}
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
              onClick={toggleSearchBar} // Added onClick handler
              className="p-2 text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200 md:ml-4 border-l-[0.5px] border-l-white/70 h-full"
            >
              <FaSearch className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Overlay - Appears below the navbar */}
      {showSearchBar && (
        <div className="absolute top-full right-0 w-full md:w-96 bg-white rounded-b-lg py-3 px-6 shadow-lg transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow p-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={toggleSearchBar} // Close button
              className="ml-4 p-2 text-gray-500 hover:text-gray-800 focus:outline-none cursor-pointer"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;