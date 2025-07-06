'use client'
import React from 'react';
import { IoCall } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { TbPhoneRinging } from "react-icons/tb";





const Features = () => {
  return (
    <div>
      <section className="bg-white py-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">


          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-12 md:gap-y-16">
            {/* Feature Item 1: VoIP for Business */}
            <div className="flex items-start text-left space-x-4"> {/* Changed to flex, items-start, text-left, and added space-x */}
              <div className="flex-shrink-0 flex justify-center items-center w-16 h-16  bg-[#5ca206] text-white"> {/* flex-shrink-0 to prevent icon from shrinking */}
                  {/* Re-using a relevant icon, you might want to replace these with specific icons later */}
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </div>
              <div> {/* Wrapper for text content */}
                <h3 className="mb-2 text-2xl font-bold text-gray-900">VoIP for Business</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.
                </p>
              </div>
            </div>

            {/* Feature Item 2: Call Center Software */}
            <div className="flex items-start text-left space-x-4">
              <div className="flex-shrink-0 flex justify-center items-center w-16 h-16  bg-[#5ca206] text-white">
<TbPhoneRinging className='w-8 h-8'/>              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Call Center Software</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.
                </p>
              </div>
            </div>

            {/* Feature Item 3: Team Collaboration Software */}
            <div className="flex items-start text-left space-x-4">
              <div className="flex-shrink-0 flex justify-center items-center mb-6 w-16 h-16  bg-[#5ca206] text-white">
                <FaUsers className="w-8 h-8"/>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Team Collaboration Software</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.
                </p>
              </div>
            </div>

            {/* Feature Item 4: Hosted PBX */}
            <div className="flex items-start text-left space-x-4">
              <div className="flex-shrink-0 flex justify-center items-center mb-6 w-16 h-16  bg-[#5ca206] text-white">
                <FaHeadphones className="w-8 h-8" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Hosted PBX</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.
                </p>
              </div>
            </div>

            {/* Feature Item 5: VoIP for Home */}
            <div className="flex items-start text-left space-x-4">
              <div className="flex-shrink-0 flex justify-center items-center mb-6 w-16 h-16  bg-[#5ca206] text-white">
<IoCall className='w-8 h-8'/>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">VoIP for Home</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.
                </p>
              </div>
            </div>

            {/* Feature Item 6: Online Faxing */}
            <div className="flex items-start text-left space-x-4">
              <div className="flex-shrink-0 flex justify-center items-center mb-6 w-16 h-16  bg-[#5ca206] text-white">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Online Faxing</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;