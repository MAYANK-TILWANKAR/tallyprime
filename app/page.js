"use client";
import Testimonial from "./Components/Testimonial";
import React from "react";
import MakePaymentComponent from "./Components/MakePaymentComponent";
import FAQSection from "./Components/faq";
import Why from "./Components/why";
import FixedBar from "./Components/fixedBar";
import Intro from "./Components/Intro";
import Contact from "./Components/Enquiry";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#075593]/30 to-[#328AB0]/30 min-h-screen">
      <header className="relative py-16 md:py-24 h-screen flex items-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="backdrop-blur-md p-8 ">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-center text-[#075593] mb-8 leading-tight">
              Master Advanced Tally Prime with GST
            </h1>
            <p className="text-xl md:text-2xl text-center text-[#075593] mb-10 max-w-3xl mx-auto">
              Unlock the power of advanced data analysis, craft interactive
              dashboards, generate in-depth reports, and reclaim up to 2 hours
              of your time daily. No prior experience required.
            </p>
            <div className="text-center mt-8 md:mt-10">
              <a
                href="#_"
                className="relative px-5 py-3 overflow-hidden font-medium text-black bg-[#EDA915] border border-[#075593] rounded-lg shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#328AB0] group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#328AB0] group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#328AB0] group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#328AB0] group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#075593] opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  <MakePaymentComponent name="Become Tally Prime Expert Now At ₹4000/-" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="py-24 md:py-32 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#075593] mb-6">
            EMBARK ON A JOURNEY OF DISCOVERY
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#328AB0] mb-8">
            UNLOCK YOUR FULL POTENTIAL
          </h3>
          <p className="text-2xl text-[#075593] mb-10">
            WE WILL SEE YOU AT THE STARTING LINE
            <span className="text-3xl ml-2">🚀</span>
          </p>
          <div className="text-center mt-8 md:mt-10">
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium tracking-tighter text-white bg-[#075593] group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#328AB0] hover:text-black group-hover:w-full group-hover:h-full"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#328AB0]"></span>
              <div className="relative text-xl">
                <MakePaymentComponent name="Become Tally Prime Expert Now At ₹4000/-" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="p-12 md:p-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#075593]">
              WHAT IF <br />I SAID...
              <span role="img" aria-label="lightbulb" className="ml-2">
                💡
              </span>
            </h2>
            <p className="text-2xl text-center mb-8 text-[#328AB0]">
              You Can Unlock the Secrets of Financial Independence
              <br />
              without needing any prior knowledge or hefty investments
            </p>
            <h3 className="text-3xl md:text-4xl text-center font-semibold mb-6 text-[#075593]">
              Yes, It is Absolutely Possible!!
              <span role="img" aria-label="thumbs-up" className="ml-2">
                👍🏻
              </span>
            </h3>
            <p className="text-xl text-center font-medium mb-10 text-[#328AB0]">
              NO Special Skills...NO Prior Experience Needed!
            </p>
            <div className="flex justify-center">
              <div class="bg-[#328AB0] text-white text-base sm:text-lg lg:text-xl font-bold py-3 px-6 sm:py-4 sm:px-8 hover:scale-110 transition-all duration-300 rounded-full">
                <MakePaymentComponent name="Become Tally Prime Expert Now At ₹6000/-" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#075593] mb-16">
            Who is this workshop for?
            <span role="img" aria-label="thinking-face" className="ml-2">
              🤔
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
                className="flex items-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 mr-6"
                />
                <span className="text-xl font-medium text-[#328AB0]">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-10">
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium tracking-tighter text-white bg-[#075593] group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#328AB0] hover:text-black group-hover:w-full group-hover:h-full"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#328AB0]"></span>
              <div className="relative text-xl">
                <MakePaymentComponent name="Become Tally Prime Expert Now At ₹6000/-" />
              </div>
            </a>
          </div>
        </div>
      </section>

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

      <Intro />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-semibold text-[#075593] mb-16">
            Do you Know?
            <span role="img" aria-label="thinking" className="ml-2">
              🫨
            </span>
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

      <Testimonial />

      <div id="why-section">
        <Why />
      </div>
      <div className=" my-5 text-center py-8 md:py-20 px-4 md:px-0 ">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#075593]">
          WE HOPE NOW YOU ARE READY TO GO ON THIS
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#328AB0] mt-2">
          CAREER CHANGING RIDE
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#075593] mt-4">
          SEE YOU INSIDE THE BATCH{" "}
          <span className="text-xl sm:text-2xl">😊</span>
        </p>

        <div className="flex justify-center mt-6">
          <div className="bg-[#328AB0] text-white text-base sm:text-lg lg:text-xl font-bold py-3 px-6 sm:py-4 sm:px-8 hover:scale-110 transition-all duration-300 rounded-full">
            <MakePaymentComponent name="Become Tally Prime Expert Now At ₹6000/-" />
          </div>
        </div>
      </div>
      <div id="enquiry">
        <Contact />
      </div>

      <FAQSection />
      <FixedBar />
    </div>
  );
};

export default LandingPage;
