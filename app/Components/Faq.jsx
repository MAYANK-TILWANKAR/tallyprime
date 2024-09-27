"use client";
import { useState } from "react";

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="lg:my-0 my-20 py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-12 xl:px-24">
        <div className="lg:max-w-[1600px] mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            FAQs
          </h2>
        </div>
        <div className="max-w-5xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out bg-white sm:mx-4 md:mx-8 lg:mx-auto transform ${
                openQuestion === index ? "scale-105 shadow-lg" : ""
              }`}
              onClick={() => toggleQuestion(index)}>
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transform transition-transform ${
                    openQuestion === index ? "rotate-180" : "rotate-0"
                  }`}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                style={{
                  maxHeight: openQuestion === index ? "300px" : "0",
                  opacity: openQuestion === index ? 1 : 0,
                }}
                className="overflow-hidden transition-all duration-500 ease-in-out px-4 sm:px-6">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?{" "}
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover:underline">
            <a href="#enquiry">Contact our support</a>{" "}
          </span>
        </p>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "1.Is there any additional charge other than the course fee?",
    answer:
      "No! No more burning hole in the pocket. There is no hidden charge.",
  },
  {
    question: "2.How ICA Global will help me to get jobs?",
    answer:
      "Our training of professional skills will help you to acquire job & internship opportunities.",
  },
  {
    question: "3. What kind of support do you provide?",
    answer:
      "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
  },
  {
    question: "4. Can I get some demo classes?",
    answer:
      "Yes, you can get demo classes without any hidden fees. We believe in providing a hassle-free experience for our students.",
  },
  {
    question: "5.  How can I get started?",
    answer:
      "Getting started is easy! Fill up the Enquiry form & register for the demo class, you can also directly register & reserve your seat by paying the course fee.",
  },
  {
    question: "6. What is the pricing structure?",
    answer:
      "- The full Course Fee is Rs 6500/- in installments.\n" +
      "- Lump Sum fee is Rs 6000/-.",
  },
];
