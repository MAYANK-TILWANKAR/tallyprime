import React from "react";
import MakePaymentComponent from "./MakePaymentComponent";

const Fifth = () => {
  return (
    <>
      <section className="my-5 text-center py-8 sm:py-12 md:py-20 px-4 md:px-0">
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
          <div className="bg-[#328AB0] text-white text-sm sm:text-lg lg:text-xl font-bold py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 hover:scale-110 transition-all duration-300 rounded-full">
            <MakePaymentComponent name="Become Tally Prime Expert Now At ₹6000/-" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Fifth;
