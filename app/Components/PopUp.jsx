// Components/Popup.js
import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

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
    }, 35000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4 sm:p-0">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-gradient-to-br from-[#075593] to-[#328AB0] p-6 sm:p-8 rounded-xl shadow-2xl text-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[#ed1515] transition-colors duration-300"
              aria-label="Close">
              <IoMdClose size={24} />
            </motion.button>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Join 3 Days Free Demo Classes
            </motion.h1>
            <motion.a
              href="/bookDemo"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#EDA915] text-[#075593] font-bold py-2 px-4 sm:px-5 rounded-full text-base sm:text-lg hover:bg-white hover:text-[#075593] transition-colors duration-300">
                Join now
              </motion.button>
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
