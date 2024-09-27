import React from "react";

const DoYouKnow = () => {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-semibold text-[#075593] mb-16">
            Do you Know?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border-4 border-dashed hover:border-[#328AB0] hover:border-solid border-[#328AB0] p-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#EDA915] mb-6">
                15K TO 2 LAKH
              </h3>
              <p className="text-xl text-[#075593]">
                An average salary for a person who is an expert in Tally Prime
                is Rs. 15,000/- to 2,00,000/- INR.
              </p>
            </div>
            <div className="border-4 border-dashed hover:border-[#328AB0] hover:border-solid border-[#328AB0] p-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#EDA915] mb-6">
                90%
              </h3>
              <p className="text-xl text-[#075593]">
                90% of small, mid-cap, and big corporate companies use Tally
                Prime for accounting and financial management.
              </p>
            </div>
            <div className="border-4 border-dashed hover:border-[#328AB0] hover:border-solid border-[#328AB0] p-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#EDA915] mb-6">
                JOBS
              </h3>
              <p className="text-xl text-[#075593]">
                In India alone, an average of more than 2000 jobs is being
                created every month for Tally Prime experts, you can check on
                google, naukri.com, indeed etc
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoYouKnow;
