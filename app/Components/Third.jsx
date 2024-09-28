import React from "react";
import MakePaymentComponent from "./MakePaymentComponent";

const Third = () => {
  return (
    <>
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="p-8 sm:p-10 md:p-16 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-[#075593]">
              WHAT IF <br />I SAID...
              <span role="img" aria-label="lightbulb" className="ml-2">
                💡
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-center mb-6 sm:mb-8 text-[#328AB0]">
              You Can Unlock the Secrets of Financial Independence
              <br />
              without needing any prior knowledge or hefty investments
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold mb-4 sm:mb-6 text-[#075593]">
              Yes, It is Absolutely Possible!!
              <span role="img" aria-label="thumbs-up" className="ml-2">
                👍🏻
              </span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-center font-medium mb-8 sm:mb-10 text-[#328AB0]">
              NO Special Skills...NO Prior Experience Needed!
            </p>
            <div className="flex justify-center">
              <div className="bg-[#328AB0] text-white text-sm sm:text-lg lg:text-xl font-bold py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 hover:scale-110 transition-all duration-300 rounded-full">
                <MakePaymentComponent name="Become Tally Prime Expert Now At ₹6000/-" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Third;
