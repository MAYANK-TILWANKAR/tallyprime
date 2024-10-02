"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "./Components/Hero";
import Course from "./Components/Course";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import Fifth from "./Components/Fifth";

import Trainer from "./Components/Trainer";
import Testimonial from "./Components/Testimonial";

import Why from "./Components/Why";
import Bar from "./Components/Bar";
import Intro from "./Components/Intro";
import Contact from "./Components/Enquiry";
import PopUp from "./Components/PopUp";

const LandingPage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Clean up Lenis instance if needed
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#075593]/30 to-[#328AB0]/30 overflow-x-hidden overflow-y-hidden  py-10 ">
      <PopUp />
      <Hero />
      <Second />
      <Course />
      <Third />
      <Fourth />
      <Fifth />
      <Trainer />
      <Intro />

      <Testimonial />
      <Why />
      <div id="enquiry">
        <Contact />
      </div>

      <Bar />
    </div>
  );
};

export default LandingPage;
