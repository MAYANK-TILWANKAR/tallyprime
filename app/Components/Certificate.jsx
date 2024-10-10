import React from "react";
import Image from "next/image";
const Certificate = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#075593]">
            Certified Excellence
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-[#328AB0]">
            Upon completion of our comprehensive course, you&apos;ll receive a
            prestigious certificate recognizing your expertise in Excel and
            financial analysis.
          </p>
          <div className="mb-10">
            <Image
              src="/images/certificate.webp"
              alt="Excel Mastery Certificate"
              width={800}
              height={600}
              className="w-full max-w-2xl sm:max-w-lg mx-auto rounded-lg shadow-lg"
            />
          </div>
          <p className="text-base sm:text-lg mb-8 text-gray-700">
            Our certification is recognized industry-wide, demonstrating your
            commitment to professional growth and mastery of essential skills.
          </p>
          <a
            href="/bookDemo"
            className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-lg font-bold text-white bg-[#328AB0] rounded-full shadow-md hover:bg-[#075593] transition-colors duration-300 ease-out transform hover:scale-105">
            Start Your Journey to Certification
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
