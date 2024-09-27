import React from "react";
import MakePaymentComponent from "./MakePaymentComponent";
const Trainer = () => {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#075593] mb-4">
                Meet your trainer
              </h2>
              <h3 className="text-3xl md:text-4xl font-light text-[#328AB0] mb-6">
                Deepesh Khokale Sir
              </h3>
              <p className="text-lg text-[#075593] leading-relaxed mb-8">
                With over 6 years of experience running a successful education
                institute, I have helped 500+ students secure placements in top
                companies. My expertise spans Basic Computer Courses, Advanced
                Excel, and Tally Prime with GST. Additionally, I have worked as
                an accountant at AdVNZ 101 for 2 years, managing complex
                accounting and taxation tasks.
              </p>
              <p className="text-lg text-[#075593] leading-relaxed mb-8">
                Drawing from this experience, I am now launching a comprehensive
                online course on Accounting and Taxation with Tally Prime. This
                course is designed to equip you with practical skills and
                knowledge needed to excel as an accountant, covering everything
                from basics to advanced concepts.
              </p>
              <p className="text-lg text-[#075593] leading-relaxed mb-8">
                Join me on this journey and unlock the skills that will set you
                up for a prosperous future in the accounting field!
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-3xl font-semibold text-[#328AB0]">6+</p>
                  <p className="text-lg text-[#075593] mt-2">Courses</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-3xl font-semibold text-[#328AB0]">500+</p>
                  <p className="text-lg text-[#075593] mt-2">Students Placed</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-3xl font-semibold text-[#328AB0]">6+</p>
                  <p className="text-lg text-[#075593] mt-2">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainer;
