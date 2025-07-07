"use client";

import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="relative">
        <div className="relative z-10 px- mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-0 min-h-[600px] items-stretch">
            {/* Left Column: Contact Form with background image */}
            <div
              className="w-full lg:w-1/2 bg-cover bg-center py-20 px-20 flex flex-col text-white"
              style={{ backgroundImage: 'url("/images/upload.png")' }}
            >
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-left">
                Get in touch
              </h2>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-left">
                Contact us
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-left sm:text-xl">
                consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <form action="#" className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-transparent border-2 border-[#5ca206] text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-transparent border-2 border-[#5ca206] text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-white bg-transparent border-2 border-[#5ca206] shadow-sm rounded-full focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-white bg-transparent rounded-2xl shadow-sm border-2 border-[#5ca206] focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-20 text-sm font-medium text-center text-white rounded-full bg-[#5ca206] sm:w-fit hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Right Column: Google Maps Section */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              {/* Replaced the placeholder div with the iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.196738187394!2d36.7851123!3d-1.2118098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d454886e4ab%3A0xc48e63a813496999!2sTwo%20Rivers%20Mall!5e0!3m2!1sen!2ske!4v1720348800000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
