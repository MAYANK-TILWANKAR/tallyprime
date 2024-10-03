"use client";
import React, { useState } from "react";
import { PropagateLoader } from "react-spinners";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "Tally Prime with GST",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/postDemo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          course: "Tally Prime with GST",
        });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F3FF] to-[#FFFFFF] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-2xl font-extrabold text-center text-[#075593] mb-8">
          Book a Demo Class Now!!!
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#075593]">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-[#328AB0] rounded-md text-sm shadow-sm placeholder-gray-400
                         focus:outline-none focus:border-[#075593] focus:ring-1 focus:ring-[#075593]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#075593]">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-[#328AB0] rounded-md text-sm shadow-sm placeholder-gray-400
                         focus:outline-none focus:border-[#075593] focus:ring-1 focus:ring-[#075593]"
            />
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-[#075593]">
              Mobile *
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-[#328AB0] rounded-md text-sm shadow-sm placeholder-gray-400
                         focus:outline-none focus:border-[#075593] focus:ring-1 focus:ring-[#075593]"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#EDA915] hover:bg-[#075593] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#075593] transition-colors duration-300"
            disabled={isSubmitting}>
            {isSubmitting ? (
              <PropagateLoader color="white" size={8} />
            ) : (
              "Book Demo"
            )}
          </button>
        </form>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white border-2 border-[#075593] rounded-lg p-6 shadow-xl animate-fade-in-down">
            <p className="text-[#075593] font-bold text-lg text-center">
              Demo class has been booked!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDemo;
