"use client";

import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../data/hand.json";
import { motion, AnimatePresence } from "framer-motion";
import arrowData from "../data/arrow.json";
import useScreenSize from "../hooks/useScreenSize";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const arrowOptions = {
  loop: true,
  autoplay: true,
  animationData: arrowData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const wordsList = [
  "G'day",
  "Hello",
  "你好",
  "مرحبا",
  "Ciao",
  "Olá",
  "नमस्ते",
  "Hej",
];
const Hero = () => {
  const [currWord, setCurrWord] = useState(wordsList[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % wordsList.length;
        setCurrWord(wordsList[newIndex]);
        return newIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const screenSize = useScreenSize();
  const [dimension, setDimension] = useState(300);
  const [arrowDimension, setArrowDimension] = useState(150);
  useEffect(() => {
    screenSize.width < 768 ? setDimension(200) : setDimension(300);
    screenSize.width < 768 ? setArrowDimension(100) : setArrowDimension(150);
  }, [screenSize]);
  const variants = {
    enter: { y: "-100%" },
    center: { y: 0, opacity: 1 },
    exit: { y: "100%" },
  };
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center"
    >
      <div className="flex items-center justify-center max-sm:flex-col">
        <div className="mb-5">
          <Lottie
            options={defaultOptions}
            height={dimension}
            width={dimension}
          />
        </div>
        <div className="sm:self-end">
          <div className="overflow-hidden py-2">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currWord}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="text-seablue lg:text-9xl md:text-8xl sm:text-7xl text-6xl font-bold"
              >
                {currWord + ","}
              </motion.h1>
            </AnimatePresence>
          </div>
          <h1 className="text-midnightgreen lg:text-9xl md:text-8xl sm:text-7xl text-6xl font-bold">
            I&apos;m Kayosh.
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex  max-lg:items-start items-end max-lg:flex-col max-lg:justify-start justify-center mt-10 p-10">
          <div className="flex items-end">
            <h2 className="text-midnightgreen md:text-6xl sm:text-5xl text-4xl max-lg:text-center whitespace-nowrap">
              / Agile /
            </h2>
            <span className="mx-5">
              <h3 className="bg-slate-700 md:text-xl sm:text-lg text-md text-white px-2 rounded-md text-end max-w-28">
                ADJECTIVE
              </h3>
            </span>
          </div>
          <h4 className="md:text-2xl sm:text-xl text-lg max-lg:w-auto text-gray-700">
            iterative, flexible, customer-focused development.
          </h4>
        </div>
      </div>
      <div className="mb-5">
        <Lottie
          options={arrowOptions}
          height={arrowDimension}
          width={arrowDimension}
        />
      </div>
    </section>
  );
};

export default Hero;
