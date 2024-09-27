"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "./Components/Hero";
import Vm from "./Components/Vm";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import Fifth from "./Components/Fifth";
import DoYouKnow from "./Components/DoYouKnow";
import Trainer from "./Components/Trainer";
import Testimonial from "./Components/Testimonial";
import Faq from "./Components/Faq";
import Why from "./Components/Why";
import Bar from "./Components/Bar";
import Intro from "./Components/Intro";
import Contact from "./Components/Enquiry";

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
    <div className="bg-gradient-to-b from-[#075593]/30 to-[#328AB0]/30 ">
      <Hero />
      <Vm />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Trainer />
      <Intro />
      <DoYouKnow />
      <Testimonial />
      <Why />
      <div id="enquiry">
        <Contact />
      </div>
      <Faq />
      <Bar />
    </div>
  );
};

export default LandingPage;
