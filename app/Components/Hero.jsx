import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen pb-28  ">
      <div className="container max-w-screen-xl mx-auto px-4 ">
        <div className="mx-auto text-center space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-4xl lg:text-[55px] font-bold text-[#075593] mb-6 sm:mb-8">
            Learn Tally Prime with GST Course in just 3{" "}
            <span className="pt-5 inline-block">Months</span>
          </h1>
          <h2 className="text-3xl sm:text-3xl lg:text-[45px] font-semibold text-[#075593] mt-4 mb-6 sm:mb-8">
            <span className="bg-yellow-300 px-2 py-1 rounded-lg inline-block transform -skew-x-6">
              Get 100% Job Placement Support!
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#075593] mb-10 sm:mb-12">
            Looking to secure a high-demand job in accounting and taxation? Our
            3-Month Practical Accounting & Taxation Course with Tally Prime
            equips you with the real-world skills top employers are searching
            for. No experience? No problem! Whether you are starting fresh or
            aiming to level up, this course is your gateway to a rewarding
            career as a certified accounting professional.
          </p>
          <p className="text-2xl sm:text-3xl font-semibold text-[#328AB0] mb-10">
            🔑 Get trained. Get certified. Get hired. It&apos;s that simple!
          </p>
          <div className="mt-8 sm:mt-10">
            <a
              href="/bookDemo"
              className="relative inline-flex items-center px-8 py-4 overflow-hidden text-lg font-bold text-white bg-[#075593] rounded-full group hover:bg-[#EDA915] transition-colors duration-300 ease-out">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-black opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative transition-colors duration-300 group-hover:text-black ease">
                Book Free Demo Class Now!
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
