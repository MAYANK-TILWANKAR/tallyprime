import React from "react";

const Second = () => {
  return (
    <>
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#075593] mb-4 md:mb-6">
            EMBARK ON A JOURNEY OF DISCOVERY
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#328AB0] mb-6 md:mb-8">
            UNLOCK YOUR FULL POTENTIAL
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-[#075593] mb-8 md:mb-10">
            WE WILL SEE YOU AT THE STARTING LINE
            <span className="text-xl sm:text-2xl md:text-3xl ml-2">🚀</span>
          </p>
          <div className="text-center mt-6 sm:mt-8 md:mt-10">
            <a
              href="/bookDemo"
              className="relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 overflow-hidden font-medium tracking-tighter text-white bg-[#075593] group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#328AB0] hover:text-black group-hover:w-full group-hover:h-full"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#328AB0]"></span>
              <div className="relative text-lg sm:text-xl">
                Book Free Demo Class Now!
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Second;
