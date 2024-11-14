import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Desktop View */}
      <div className="hidden md:block container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 mx-auto lg:mx-0 lg:ml-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-left">
            Learn Tally Prime with GST Course in just{" "}
            <span className="text-yellow-300">3 Months</span>
          </h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl lg:text-4xl font-semibold text-white mt-4 mb-6 text-left">
            <span className="px-4 py-2 rounded-lg inline-block transform -skew-x-6 text-[#ffffff] shadow-lg">
              Get 100% Job Placement Support!
            </span>
          </motion.h2>
          <div className="text-left">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#075593] font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-300 transition duration-300">
              <a href="/bookDemo">Enroll Now</a>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden container mx-auto px-4 mb-10 z-10 flex flex-col items-center">
        <Image
          src="/images/mobile.webp"
          alt="hero"
          width={400}
          height={400}
          quality={100}
          priority
          className="mb-8 rounded-lg shadow-lg object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#075593] mb-4 leading-tight">
            Learn Tally Prime with GST Course in just{" "}
            <span className="text-yellow-400">3 Months</span>
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl font-semibold text-[#075593] mt-3 mb-6">
            <span className="px-3 py-2 rounded-lg inline-block transform -skew-x-6 bg-[#075593] text-white shadow-lg">
              Get 100% Job Placement Support!
            </span>
          </motion.h2>
        </motion.div>
      </div>

      <Image
        src="/images/hero.webp"
        alt="hero"
        width={1920}
        height={1080}
        quality={100}
        priority
        className="absolute inset-0 hidden md:block object-cover"
      />
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#075593]/60 to-transparent"></div>
    </section>
  );
};

export default Hero;
