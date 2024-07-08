"use client";

import React, { useEffect, useState, useRef } from "react";
import { roadmapData } from "../data/roadmapData";

const Roadmap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currItem, setCurrItem] = useState({});
  const [imagePosition, setImagePosition] = useState(0);
  const [fromTop, setFromTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef(null);
  const stickyRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const itemHeight = window.innerHeight / 2;
    const newIndex = Math.min(roadmapData.length - 1, scrollTop / itemHeight);
    setCurrentIndex(newIndex);
    setFromTop(scrollTop);
    setCurrItem(roadmapData[Math.floor(newIndex)]);
    setImagePosition((scrollTop / document.documentElement.scrollHeight) * 100);

    // Get distance from top of container to sticky element
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const stickyTop = stickyRef.current.getBoundingClientRect().top;
    console.log("containertop is " + containerTop);
    console.log("stickyTop is" + stickyTop);
    const distanceFromContainerTop = stickyTop - containerTop;

    // Calculate line height based on scroll position
    const maxHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const newHeight = Math.min(
      ((scrollTop - containerTop) / maxHeight) * 100,
      100
    );
    setLineHeight(containerTop - stickyTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative container mx-auto my-10 px-36">
      {/* Blue bar positioned absolutely */}
      <div className="flex relative">
        <div
          className="sticky top-1/3 self-start mx-8 flex-1"
          ref={containerRef}
        >
          <img
            src={currItem.image}
            alt={currItem.title}
            className="w-full h-72 rounded-lg"
          />
        </div>
        <div
          className="sticky top-0 left-1/2 transform -translate-x-1/2 w-1 bg-blue-500"
          style={{ height: `${lineHeight}px` }}
          ref={stickyRef}
        ></div>
        <div className="flex-1">
          {roadmapData.map((item, index) => (
            <div key={index} className="p-4 mx-8 mb-20">
              <h3 className="mt-4 mb-2 font-bold text-2xl text-midnightgreen">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
              <a
                href={item.link}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
