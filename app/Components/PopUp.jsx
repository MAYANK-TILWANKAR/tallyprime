// Components/Popup.js
import React, { useState, useEffect } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // Popup timer
  useEffect(() => {
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
      }, 10000);
      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
    // Reset the hasShown state after a delay to allow the popup to show again
    setTimeout(() => {
      setHasShown(false);
    }, 60000); // 1 minute delay before allowing the popup to show again
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 z-50 py-40">
      <div className="bg-white p-6 rounded shadow-lg text-center mt-20 animate-slideDown">
        <h2 className="text-xl font-bold mb-4">Popup Heading</h2>
        <button
          onClick={handleClose}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
