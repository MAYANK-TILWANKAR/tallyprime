import React from "react";
import MakePaymentComponent from "./MakePaymentComponent";

const Hero = () => {
  return (
    <>
      <section className="py-16 md:py-24 h-screen flex items-center">
        <div className="container mx-auto px-4 z-10">
          <div className="p-4 sm:p-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-[#075593] mb-6 sm:mb-8 leading-tight">
              Master Advanced Tally Prime with GST
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-center text-[#075593] mb-8 sm:mb-10 max-w-lg sm:max-w-2xl mx-auto">
              Unlock the power of advanced data analysis, craft interactive
              dashboards, generate in-depth reports, and reclaim up to 2 hours
              of your time daily. No prior experience required.
            </p>
            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <a
                href="#_"
                className="relative px-5 py-3 sm:px-6 sm:py-4 overflow-hidden font-medium text-black bg-[#EDA915] border border-[#075593] rounded-lg shadow-inner group inline-block">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#328AB0] group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#328AB0] group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#328AB0] group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#328AB0] group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#075593] opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  <MakePaymentComponent name="Become Tally Prime Expert Now At ₹4000/-" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
