"use client";
import React from "react";
import { IoReceiptOutline, IoAnalyticsSharp } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";

const Features = () => {
  return (
    <section className="relative bg-white py-25 px-4 sm:px-6 lg:px-8">
      {/* ✅ Green Overlay */}
      <div className="absolute inset-0 bg-[#5ca206]/5 pointer-events-none"></div>

      {/* ✅ Content stays relative */}
      <div className="relative max-w-screen-xl mx-auto">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-900">
            Features
          </h2>
          <div className="w-[10%] border-b-2 border-red-500 mt-2 mx-auto"></div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-12 md:gap-y-16">
          {/* Feature 1 */}
          <div className="flex items-start text-left space-x-4">
            <div className="flex-shrink-0 flex justify-center items-center w-16 h-16 bg-[#5ca206] text-white">
              <IoReceiptOutline className="w-8 h-8" />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Advanced Billing
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Know Where Your Budget Goes
                <br />
                <br />
                Track and allocate call-related expenses in real-time. Assign
                costs to teams, campaigns, or departments and optimize your
                spending without compromising service quality.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start text-left space-x-4">
            <div className="flex-shrink-0 flex justify-center items-center w-16 h-16 bg-[#5ca206] text-white">
              <IoAnalyticsSharp className="w-8 h-8" />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                BI & Analytics
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Turn Data Into Results
                <br />
                <br />
                Unlock real-time dashboards that visualize call volumes, agent
                performance, and customer satisfaction. Leverage historical
                trends to improve service delivery and decision-making.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start text-left space-x-4">
            <div className="flex-shrink-0 flex justify-center items-center w-16 h-16 bg-[#5ca206] text-white">
              <GrPowerCycle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Switchboard Manager
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Stop Guessing. Start Managing.
                <br />
                <br />
                Monitor live call flows, manage queues, and reroute calls
                instantly using intuitive drag-and-drop tools. Ensure zero
                bottlenecks and improved customer experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
