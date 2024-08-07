import React from "react";
import Lottie from "react-lottie";
import animationData from "../data/bubble.json";
import { useState, useEffect } from "react";
import useScreenSize from "../hooks/useScreenSize";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const About = () => {
  const [dimension, setDimension] = useState(650);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width < 576) {
      setDimension(300);
    } else if (screenSize.width >= 576 && screenSize.width < 768) {
      setDimension(450);
    } else {
      setDimension(650);
    }
  }, [screenSize]);
  return (
    <section
      id="hero"
      className="mb-36 mx-48 max-lg:mx-36 max-md:mx-12 max-sm:mx-2"
    >
      <div className="relative flex items-center justify-center">
        <div className="flex items-center justify-center">
          <Lottie
            options={defaultOptions}
            height={dimension}
            width={dimension}
          />
        </div>
        <div className="absolute text-center w-1/3 max-lg:w-1/2">
          <span className="text-white text-3xl max-md:text-xl max-sm:text-lgfont-light text-center z-10">
            <i>
              That’s <b>my approach</b> in a nutshell.
            </i>
          </span>
          <br />
          <span className="text-white text-3xl max-md:text-xl max-sm:text-lgfont-light text-center z-10">
            <i>
              Staying agile keeps me ahead, ensuring I deliver solutions that
              matter.
            </i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
