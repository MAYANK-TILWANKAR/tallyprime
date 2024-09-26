import { useEffect, useState } from "react";
import MakePaymentComponent from "./MakePaymentComponent";

const FixedBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const whySection = document.getElementById("why-section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(true);
        }
      });
    });

    if (whySection) {
      observer.observe(whySection);
    }

    return () => {
      if (whySection) {
        observer.unobserve(whySection);
      }
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 w-full bg-[#075593]/10 p-4 flex items-center justify-between transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}>
      <div>
        <p className="text-[#075593] text-lg font-semibold">Price: ₹6000/-</p>
      </div>
      <div className="bg-[#328AB0] text-white font-bold py-2 px-4 rounded-md">
        <MakePaymentComponent name="Register Now" />
      </div>
    </div>
  );
};

export default FixedBar;
