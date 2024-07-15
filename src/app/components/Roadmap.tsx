"use client";

import React, { useEffect, useState, useRef } from "react";
import { roadmapData } from "../data/roadmapData";
import useScreenSize from "../hooks/useScreenSize";
const Roadmap = () => {
  const [currItem, setCurrItem] = useState({});
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const timelineRef = useRef(null);
  const screenSize = useScreenSize();
  console.log(screenSize);
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const timelineHeight = timelineRef.current?.getBoundingClientRect();
    const containerHeight =
      containerRef.current?.getBoundingClientRect().height;
    const containerTop = containerRef.current?.getBoundingClientRect().top;
    const stickyTop = stickyRef.current?.getBoundingClientRect().top;

    const newIndex = Math.floor(
      ((timelineHeight.bottom - timelineHeight.height - containerHeight) /
        timelineHeight.height) *
        -roadmapData.length
    );
    // console.log(Math.floor(newIndex));
    setCurrItem(roadmapData[Math.floor(newIndex < 0 ? 0 : newIndex)]);
    console.log(newIndex);
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
    <section className="relative flex justify-center items-center 2xl:mx-72 xl:mx-24 lg:mx-8">
      <div className="flex container" ref={timelineRef}>
        {screenSize.width >= 1024 ? (
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
        ) : (
          <div className="sticky top-1/3 self-start" ref={containerRef}></div>
        )}
        <div
          className="absolute top-0 lg:left-1/2 w-2 bg-blue-500 z-20 ml-2"
          style={{ height: `${lineHeight}px` }}
          ref={stickyRef}
        ></div>
        <div
          className="absolute top-0 lg:left-1/2 w-2 bg-gray-200 z-10 ml-2"
          style={{ height: `${timelineHeight}px` }}
        ></div>
        <div className="flex-1">
          {roadmapData.map((item, index) => (
            <>
              {screenSize.width < 1024 ? (
                <div className="mx-8 p-4">
                  {item?.component ? (
                    <item.component />
                  ) : (
                    <img
                      src={currItem?.image}
                      alt={currItem?.title}
                      className="w-full h-72 rounded-lg"
                    />
                  )}
                </div>
              ) : (
                console.log("testing")
              )}
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
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
