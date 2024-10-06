import React from "react";

const Second = () => {
  return (
    <>
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 h-screen flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#075593] mb-3 sm:mb-4 md:mb-5">
            BECOME A CERTIFIED ACCOUNTANT..!
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#328AB0] mb-4 sm:mb-5 md:mb-6">
            GET SKILLS TO GET HIRED..!
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#0d0e10] mb-6 sm:mb-7 md:mb-8">
            WE WILL SEE YOU AT THE STARTING LINE
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl ml-1 sm:ml-2">
              🚀
            </span>
          </p>
          <div className="mt-6 sm:mt-8">
            <a
              href="/bookDemo"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold text-white bg-[#EDA915] rounded-lg shadow-md hover:bg-[#075593] transition-colors duration-300 ease-out transform hover:scale-105">
              Book Free Demo Class Now!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Second;
