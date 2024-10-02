import React from "react";

const Fourth = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full lg:max-w-[1300px] px-8 py-48   ">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Who is this course for?
            <span role="img" aria-label="thinking-face">
              🤔
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: "HR & Admin", icon: "/images/admin.svg" },
              { title: "Business Analyst", icon: "/images/enginner.svg" },
              {
                title: "Sales & Marketing Professional",
                icon: "/images/sales.svg",
              },
              {
                title: "Statistical Analysis Professional",
                icon: "/images/stastics.svg",
              },
              { title: "Finance Professional", icon: "/images/finance.svg" },
              {
                title: "Advocate-Lawyers Professional",
                icon: "/images/advocate.svg",
              },
              {
                title: "Investment Banking Analyst",
                icon: "/images/banking.svg",
              },
              { title: "Share Marketing", icon: "/images/share.svg" },
              { title: "Student", icon: "/images/student.svg" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 mr-4"
                />
                <span className="text-lg font-medium text-gray-800">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="/bookDemo"
              className="relative inline-flex items-center px-8 py-4 overflow-hidden text-lg font-bold text-white bg-gradient-to-r from-[#328AB0] to-[#075593] rounded-full group hover:from-[#075593] hover:to-[#328AB0] transition-all duration-300 ease-out shadow-lg hover:shadow-xl transform hover:scale-105">
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
