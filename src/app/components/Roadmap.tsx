"use client";

import React, { useEffect, useState, useRef } from "react";
import { roadmapData } from "../data/roadmapData";

const Roadmap = () => {
  const [currItem, setCurrItem] = useState({});
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const timelineRef = useRef(null);
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const timelineHeight = timelineRef.current.getBoundingClientRect();
    const containerHeight = containerRef.current.getBoundingClientRect().height;
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const stickyTop = stickyRef.current.getBoundingClientRect().top;
    // console.log("scrollTop" + scrollTop);
    // console.log("timelineTop is" + timelineHeight.bottom);
    // console.log("timelineHeight us " + timelineHeight.height);
    const newIndex = Math.floor(
      ((timelineHeight.bottom - timelineHeight.height - containerHeight) /
        timelineHeight.height) *
        -roadmapData.length
    );
    // console.log(Math.floor(newIndex));
    setCurrItem(roadmapData[Math.floor(newIndex < 0 ? 0 : newIndex)]);
    setLineHeight(containerTop - stickyTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const CurrentComponent = currItem?.component ? currItem.component : "div";
  const timelineHeight = timelineRef.current?.getBoundingClientRect().height;
  return (
    <section className="relative flex justify-center items-center xl:mx-72 lg:mx-48">
      <div className="relative flex container my-10" ref={timelineRef}>
        <div className="sticky top-1/3 self-start flex-1" ref={containerRef}>
          <div className="mx-8 p-4">
            {CurrentComponent !== "div" ? (
              <CurrentComponent />
            ) : (
              <img
                src={currItem?.image}
                alt={currItem?.title}
                className="w-full h-72 rounded-lg"
              />
            )}
          </div>
        </div>
        <div
          className="sticky top-0 left-1/2 w-1 bg-blue-500 z-20"
          style={{ height: `${lineHeight}px` }}
          ref={stickyRef}
        ></div>
        <div
          className="absolute top-0 left-1/2  w-1 bg-gray-200 z-10"
          style={{ height: `${timelineHeight}px` }}
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
    </section>
  );
};

export default Roadmap;
