import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Trainer = () => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("trainer-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          setStartCount(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="trainer-section" className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#075593] mb-2 sm:mb-4">
              Meet your trainer
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-bold mb-3 sm:mb-6">
              Deepesh Khokale Sir
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#075593] leading-relaxed mb-4 sm:mb-6 md:mb-8 text-justify">
              With over 6 years of experience running a successful education
              institute, 500+ students secure placements in top companies. My
              expertise spans Basic Computer Courses, Advanced Excel, and Tally
              Prime with GST.
            </p>
            <p className="hidden sm:block text-sm sm:text-base md:text-lg lg:text-xl text-[#075593] leading-relaxed mb-4 sm:mb-6 md:mb-8 text-justify">
              Additionally, I have worked as an accountant at AdVNZ 101 for 2
              years, managing complex accounting and taxation tasks. Drawing
              from this experience, I am now launching a comprehensive online
              course on Accounting and Taxation with Tally Prime. This course is
              designed to equip you with practical skills and knowledge needed
              to excel as an accountant, covering everything from basics to
              advanced concepts.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#075593] leading-relaxed mb-4 sm:mb-6 md:mb-8 text-justify">
              Join me on this journey and unlock the skills that will set you up
              for a prosperous future in the accounting field!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#328AB0]">
                  {startCount && <CountUp end={6} duration={2} />}+
                </p>
                <p className="text-sm sm:text-base md:text-lg text-[#075593] mt-2">
                  Courses
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#328AB0]">
                  {startCount && <CountUp end={1000} duration={2} />}+
                </p>
                <p className="text-sm sm:text-base md:text-lg text-[#075593] mt-2">
                  Students Placed
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#328AB0]">
                  {startCount && <CountUp end={6} duration={2} />}+
                </p>
                <p className="text-sm sm:text-base md:text-lg text-[#075593] mt-2">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainer;
