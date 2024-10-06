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
import Hero1 from "./Components/Hero1";
import Certificate from "./Components/Certificate";
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
    <div className="bg-gradient-to-b from-[#075593]/30 to-[#328AB0]/30 overflow-x-hidden overflow-y-hidden  ">
      <PopUp />
      <Hero1 />
      {/* <Hero /> */}
      <Second />
      <Course />
      {/* <Third /> */}
      <Fourth />
      <Certificate />
      {/* <Trainer /> */}
      {/* <Intro /> */}

      <Testimonial />
      <Why />
      <Fifth />
      <div id="enquiry">
        <Contact />
      </div>

      <Bar />
    </div>
  );
};

export default LandingPage;
