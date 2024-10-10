import React from "react";

const Fourth = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
            Who is this course for?
            <span role="img" aria-label="thinking-face" className="ml-2">
              🤔
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {[
              { title: "HR & Admin", icon: "/svgs/admin.svg" },
              { title: "Business Analyst", icon: "/svgs/enginner.svg" },
              {
                title: "Sales & Marketing Professional",
                icon: "/svgs/sales.svg",
              },
              {
                title: "Statistical Analysis Professional",
                icon: "/svgs/stastics.svg",
              },
              { title: "Finance Professional", icon: "/svgs/finance.svg" },
              {
                title: "Advocate-Lawyers Professional",
                icon: "/svgs/advocate.svg",
              },
              {
                title: "Investment Banking Analyst",
                icon: "/svgs/banking.svg",
              },
              { title: "Share Marketing", icon: "/svgs/share.svg" },
              { title: "Student", icon: "/svgs/student.svg" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-3 sm:p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4"
                />
                <span className="text-sm sm:text-base lg:text-lg font-medium text-gray-800">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 sm:mt-8">
            <a
              href="/bookDemo"
              className="relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#328AB0] to-[#075593] rounded-full group hover:from-[#075593] hover:to-[#328AB0] transition-all duration-300 ease-out shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Book Free Demo Class Now!</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fourth;
