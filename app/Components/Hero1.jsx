import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 mx-auto lg:mx-0 lg:ml-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight text-center lg:text-left">
            Learn Tally Prime with GST Course in just{" "}
            <span className="text-yellow-300">3 Months</span>
          </h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-3 sm:mt-4 mb-4 sm:mb-6 text-center lg:text-left">
            <span className="px-2 sm:px-4 py-1 sm:py-2 rounded-lg inline-block transform -skew-x-6 text-[#ffffff] shadow-lg">
              Get 100% Job Placement Support!
            </span>
          </motion.h2>
          <div className="text-center lg:text-left">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#075593] font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:bg-yellow-300 transition duration-300">
              Enroll Now
            </motion.button>
          </div>
        </motion.div>
      </div>
      <Image
        src="/images/hero.png"
        alt="hero"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#075593]/60 to-transparent"></div>
    </section>
  );
};

export default Hero;
