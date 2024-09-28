import React from "react";

const Fourth = () => {
  return (
    <>
      <section className="sm:py-48 py-10 ">
        <div className="lg:max-w-[1300px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#075593] mb-16">
            Who is this workshop for?
            <span role="img" aria-label="thinking-face" className="ml-2">
              🤔
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "HR & Admin", icon: "/images/admin.svg" },
              { title: "Engineers", icon: "/images/enginner.svg" },
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
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:scale-105">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-3"
                />
                <span className="text-sm font-medium text-[#328AB0] text-center">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Fourth;
