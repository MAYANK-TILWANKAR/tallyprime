import React from "react";

const Fifth = () => {
  return (
    <>
      <section className=" text-center py-8 sm:py-12 md:py-20 px-4 md:px-0 bg-white">
        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-[#075593]">
          WE HOPE NOW YOU ARE READY TO GO ON THIS
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-4xl font-extrabold text-[#328AB0] mt-2">
          CAREER CHANGING RIDE
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#075593] mt-4">
          SEE YOU INSIDE THE BATCH{" "}
          <span className="text-lg sm:text-xl md:text-2xl">😊</span>
        </p>

        <div className="flex justify-center mt-6">
          <a
            href="/bookDemo"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white transition-all duration-300 ease-out border-2 border-[#328AB0] rounded-full group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#328AB0] group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#328AB0] transition-all duration-300 transform group-hover:translate-x-full ease">
              Book Free Demo Class Now!
            </span>
            <span className="relative invisible">
              Book Free Demo Class Now!
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Fifth;
