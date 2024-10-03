// Components/Popup.js
import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // Popup timer
  useEffect(() => {
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
      }, 2000);
      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
    // Reset the hasShown state after a delay to allow the popup to show again
    setTimeout(() => {
      setHasShown(false);
    }, 20000); // 20 seconds delay before allowing the popup to show again
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4 sm:p-0">
      <div className="bg-gradient-to-br from-[#075593] to-[#328AB0] p-6 sm:p-8 rounded-xl shadow-2xl text-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto animate-fadeIn relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[#ed1515] transition-colors duration-300"
          aria-label="Close">
          <IoMdClose size={24} />
        </button>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight">
          Join 3 Days Free Demo Classes
        </h1>
        <a href="/bookDemo" className="inline-block">
          <button className="bg-[#EDA915] text-[#075593] font-bold py-2 px-4 sm:px-5 rounded-full text-base sm:text-lg hover:bg-white hover:text-[#075593] transition-colors duration-300 transform hover:scale-105">
            Join now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Popup;
