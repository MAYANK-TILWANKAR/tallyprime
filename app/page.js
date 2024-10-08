"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero1 from "./Components/Hero1";
import Second from "./Components/Second";
import Course from "./Components/Course";
import Fourth from "./Components/Fourth";
import Certificate from "./Components/Certificate";
import Testimonial from "./Components/Testimonial";
import Why from "./Components/Why";
import Fifth from "./Components/Fifth";
import Contact from "./Components/Enquiry";
import Bar from "./Components/Bar";
import PopUp from "./Components/PopUp";

const LandingPage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#075593]/30 to-[#328AB0]/30 overflow-hidden">
      <PopUp />
      <Hero1 />
      <Second />
      <Course />
      <Fourth />
      <Certificate />
      <Testimonial />
      <Why />
      <Fifth />
      <Contact />
      <Bar />
    </div>
  );
};

export default LandingPage;
