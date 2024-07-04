"use client";

import React from "react";
import Lottie from "react-lottie";
import animationData from "../data/hand.json";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="hero" className="p-8">
      <div className="flex items-center justify-center pb-36">
        <div className="mb-5">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
        <div className="self-end">
          <h1 className="text-midnightgreen text-9xl font-bold">G'day,</h1>
          <h1 className="text-midnightgreen text-9xl font-bold">I'm Kayosh.</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
