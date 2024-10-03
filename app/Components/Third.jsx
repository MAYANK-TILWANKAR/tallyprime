import React from "react";

const Third = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 md:mb-5 text-[#075593]">
            WHAT IF I SAID...
          </h2>
          <p className="hidden sm:block text-base sm:text-lg md:text-xl lg:text-2xl text-center mb-3 sm:mb-4 md:mb-5 text-[#328AB0]">
            You Can Unlock the Secrets of Financial Independence
            <br className="hidden sm:block" />
            without needing any prior knowledge or hefty investments
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-2 sm:mb-3 md:mb-4 text-[#075593]">
            Yes, It is Absolutely Possible!!
            <span role="img" aria-label="thumbs-up" className="ml-2">
              👍🏻
            </span>
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center font-medium mb-4 sm:mb-5 md:mb-6 text-[#328AB0]">
            NO Special Skills...NO Prior Experience Needed!
          </p>
          <div className="mt-6 sm:mt-8 flex justify-center">
            <a
              href="/bookDemo"
              className="inline-block px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 text-sm sm:text-base md:text-lg font-bold text-white bg-[#328AB0] rounded-xl sm:rounded-2xl shadow-md hover:bg-[#2a7691] transition-colors duration-300 ease-out transform hover:scale-105 whitespace-nowrap">
              Book Free Demo Class Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
