"use client";
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";


export default function HomePage() {

  // Define the custom theme object for the Carousel
const customCarouselTheme = {
  root: {
    base: "relative h-full w-full rounded-none",
    leftControl: "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl: "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white dark:bg-gray-800"
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 rounded-none",
    wrapper: {
      off: "w-full shrink-0 transform cursor-default snap-center",
      on: "w-full shrink-0 transform cursor-grab snap-center"
    }
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center  bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70",
    icon: "h-5 w-5 text-white sm:h-6 sm:w-6 dark:text-gray-800"
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none", // This has rounded-lg
    snap: "snap-x"
  }
};

  return (
    <Carousel
      indicators={false}
      slide={false}
      theme={customCarouselTheme} // Pass the custom theme here
      className="!rounded-none my-custom-carousel-wrapper"    >
      {/* Slide 1 */}
      <div key="slide1" className="relative w-full h-full !rounded-none ">
        {" "}
        {/* Also ensure slide container is not rounded */}
        <img
          src={`/images/slide1.jpg`}
          alt={`Slide 1`}
          className="w-full h-full object-cover !rounded-none" // Ensure image itself is not rounded if somehow applied
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        {/* Overlay for consistent darkening - previously uncommented but now added bg-black/40 */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Text content for Slide 1 */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-10 text-white max-w-6xl mx-auto">
          {/* Wrapper for the text and button to control right alignment */}
          <div className="flex flex-col items-end p-6 mt-10">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              // Adjusted font sizes for better responsiveness across screen sizes
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-6xl font-thin mb-2 sm:mb-4 md:mb-6 uppercase tracking-wide text-right w-full"
            >
              Wherever you go, <br /> our network <br /> follows.
            </motion.h1>

            {/* Blue horizontal line for slide 1 (right aligned) */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "2.5rem", opacity: 1 }} // Default/initial width for xs
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-0.5 sm:h-1 md:h-1.5 bg-blue-500 mb-4 sm:mb-6 md:mb-8 mr-0" // mr-0 for right alignment
              // Responsive width for the line
              style={{
                width: "2.5rem", // default
                "@screen sm": { width: "3.5rem" },
                "@screen md": { width: "6rem" },
                "@screen lg": { width: "8rem" },
              }}
            />

            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              // Adjusted font sizes, line height, and tracking for better readability
              className="text-sm sm:text-base md:text-2xl lg:text-3xl
                         font-light mb-6 md:mb-10 text-right
                         max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl
                         leading-normal sm:leading-relaxed md:leading-loose tracking-normal sm:tracking-wide md:tracking-widest w-full"
            >
              We make it a priority to offer flexible
              <br />
              services to accommodate your needs
            </motion.h2>

            {/* Get a Quote Now Button */}
            <motion.button
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-8 md:py-4
                         bg-[#5ca206] hover:bg-[#4d8b05] text-white font-semibold rounded shadow-lg
                         flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-3
                         transition-colors duration-300 ease-in-out border border-white
                         text-xs sm:text-sm md:text-lg"
            >
              <span>GET A QUOTE NOW</span>
              <FaArrowRight className="text-xs sm:text-sm md:text-lg" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div key="slide2" className="relative w-full h-full !rounded-none">
        {" "}
        {/* Also ensure slide container is not rounded */}
        <img
          src={`/images/slide2.jpg`}
          alt={`Slide 2`}
          className="w-full h-full object-cover !rounded-none" // Ensure image itself is not rounded if somehow applied
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        {/* Overlay for consistent darkening */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Text content for Slide 2 */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-10 text-white max-w-6xl mx-auto">
          {/* Wrapper for the text and button to control left alignment */}
          <div className="flex flex-col items-start p-6 my-auto">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-thin mb-2 sm:mb-4 md:mb-6 uppercase tracking-wide text-left w-full"
            >
              Wherever you go <br /> our network <br /> follows.
            </motion.h1>
            {/* Blue horizontal line for slide 2 (left aligned) */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "2.5rem", opacity: 1 }} // Default/initial width for xs
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-0.5 sm:h-1 md:h-1.5 bg-blue-500 mb-4 sm:mb-6 md:mb-8 ml-0" // ml-0 for left alignment
              // Responsive width for the line
              style={{
                width: "2.5rem", // default
                "@screen sm": { width: "3.5rem" },
                "@screen md": { width: "6rem" },
                "@screen lg": { width: "8rem" },
              }}
            />
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm sm:text-base md:text-2xl lg:text-3xl
                         font-light mb-6 md:mb-10 text-left
                         max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl
                         leading-normal sm:leading-relaxed md:leading-loose tracking-normal sm:tracking-wide md:tracking-widest w-full"
            >
              We make it a priority to offer flexible
              <br />
              services to accommodate your needs
            </motion.h2>
            {/* Get a Quote Now Button */}
            <motion.button
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-8 md:py-4
                         bg-[#5ca206] hover:bg-[#4d8b05] text-white font-semibold rounded shadow-lg
                         flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-3
                         transition-colors duration-300 ease-in-out border border-white
                         text-xs sm:text-sm md:text-lg"
            >
              <span>GET A QUOTE NOW</span>
              <FaArrowRight className="text-xs sm:text-sm md:text-lg" />
            </motion.button>
          </div>
        </div>
      </div>
    </Carousel>
  );
}