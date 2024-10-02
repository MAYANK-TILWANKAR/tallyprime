import React from "react";

const Third = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-[#075593]">
            WHAT IF I SAID...
            <span role="img" aria-label="lightbulb" className="ml-2">
              💡
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center mb-4 sm:mb-6 text-[#328AB0]">
            You Can Unlock the Secrets of Financial Independence
            <br />
            without needing any prior knowledge or hefty investments
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold mb-3 sm:mb-4 text-[#075593]">
            Yes, It is Absolutely Possible!!
            <span role="img" aria-label="thumbs-up" className="ml-2">
              👍🏻
            </span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-center font-medium mb-6 sm:mb-8 text-[#328AB0]">
            NO Special Skills...NO Prior Experience Needed!
          </p>
          <div className="flex justify-center">
            <a
              href="/bookDemo"
              className="bg-[#328AB0] text-white text-xs sm:text-sm lg:text-base font-bold py-2 px-4 sm:py-2.5 sm:px-5 lg:py-3 lg:px-6 rounded-full transform transition-transform duration-300 hover:scale-105 hover:bg-[#2a7691] focus:outline-none shadow-md">
              Book Free Demo Class Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
