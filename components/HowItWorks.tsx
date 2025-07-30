import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="relative bg-white py-20 px-6 sm:px-10 lg:px-16">
      {/* ✅ Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">How It Works</h2>
        <div className="w-[10%] border-b-2 border-red-500 mt-3 mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          How Go-Desk transforms your call center in just a few steps
        </p>
      </div>

      {/* ✅ Timeline */}
      <ol className="relative border-s border-gray-200 max-w-3xl mx-auto">
        {/* Step 1 */}
        <li className="mb-12 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#5ca206] rounded-full -start-4 ring-4 ring-white">
            <FaCheckCircle className="text-white w-4 h-4" />
          </span>
          <h3 className="text-lg font-semibold text-gray-900">
            Intelligent Call Routing
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Customer calls are routed intelligently through cloud-based
            workflows.{" "}
          </p>
        </li>

        {/* Step 2 */}
        <li className="mb-12 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#5ca206] rounded-full -start-4 ring-4 ring-white">
            <FaCheckCircle className="text-white w-4 h-4" />
          </span>
          <h3 className="text-lg font-semibold text-gray-900">
            CRM Integration
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Agents view customer info instantly via CRM integration.
          </p>
        </li>

        {/* Step 3 */}
        <li className="mb-12 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#5ca206] rounded-full -start-4 ring-4 ring-white">
            <FaCheckCircle className="text-white w-4 h-4" />
          </span>
          <h3 className="text-lg font-semibold text-gray-900">
            Real-time Dashboards
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Supervisors track real-time dashboards to improve team performance.
          </p>
        </li>

        {/* Step 4 */}
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#5ca206] rounded-full -start-4 ring-4 ring-white">
            <FaCheckCircle className="text-white w-4 h-4" />
          </span>
          <h3 className="text-lg font-semibold text-gray-900">
            Analytics & Training
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Analytics + recordings fuel training and drive service improvements.
          </p>
        </li>
      </ol>
    </section>
  );
};

export default HowItWorks;
