'use client'
import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="bg-[#81d742] py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Column: Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center"> {/* Added md:w-1/2 and md:mb-0 */}
          <img
            className="w-full h-auto max-w-xl object-contain" // Changed max-w-lg to max-w-xl for a larger size, or you could remove it entirely if you want it to fill the half-width.
            src="/images/phones.png" // REPLACE THIS with your actual image path
            alt="calling"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="text-white text-center md:text-left md:w-1/2 md:pl-16">
          <h2 className="mb-4 text-4xl lg:text-5xl font-extrabold leading-tight">
            Our call, anytime, anywhere!
          </h2>
          <p className="text-lg sm:text-xl">
            Lorem ipsum dolor sit amet.
          </p>
          <div className="w-[10%] border-b-2 border-red-500 mt-2 mx-auto md:mx-0"></div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;