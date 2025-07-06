"use client";

import React from "react";
import MyAccordion from "../components/MyAccordion";

const FAQ = () => {
  return (
    <div>
      <section className="relative py-16 lg:py-24 overflow-hidden h-[80vh] flex items-center justify-center"> {/* Added flex items-center justify-center */}
        {/* Background Image with Overlay and Blur */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="/images/calling-phone-1.jpg"
            alt="calling"
          />
          {/* Overlay with linear gradient for darker top */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div> */}
        </div>

        {/* Content Container */}
        {/* Adjusted z-index and added items-center for vertical centering within the grid */}
        <div className="relative z-10 gap-8 items-center px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 xl:grid-cols-2 lg:px-6">
          {/* Left Column: Text Content and Accordion */}
          <div className="mt-4 md:mt-0 text-center md:text-left xl:text-justify text-white">
            <h2 className="mb-4 text-3xl sm:text-5xl lg:text-5xl font-normal text-black leading-tight">
              You’ve got questions, we’ve got answers.
            </h2>
            <div className="w-[10%] border-b-2 border-red-500 mt-2 mx-auto md:mx-0 mb-10"></div>
            <MyAccordion />
          </div>
          {/* Right Column: This column is now effectively empty on large screens */}
          <div className="hidden xl:block">
            {/* Placeholder for the right column */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;