"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { roadmapData } from "../data/roadmapData";
import useScreenSize from "../hooks/useScreenSize";
import { motion } from "framer-motion";

const Roadmap = () => {
  const [currItem, setCurrItem] = useState<Record<string, any>>({});
  const [lineHeight, setLineHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const screenSize = useScreenSize();
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const timelineHeight = timelineRef.current?.getBoundingClientRect();
    const containerHeight =
      containerRef.current?.getBoundingClientRect().height;
    const containerTop = containerRef.current?.getBoundingClientRect().top;
    const stickyTop = stickyRef.current?.getBoundingClientRect().top;

    if (
      timelineHeight &&
      containerHeight != null &&
      containerTop &&
      stickyTop
    ) {
      const newIndex = Math.floor(
        ((timelineHeight.bottom - timelineHeight.height - containerHeight) /
          timelineHeight.height) *
          -roadmapData.length
      );

      setCurrItem(
        roadmapData[
          Math.floor(
            newIndex < 0
              ? 0
              : newIndex >= roadmapData.length
              ? roadmapData.length - 1
              : newIndex
          )
        ]
      );
      setLineHeight(containerTop - stickyTop);
      console.log(stickyTop, containerTop, containerTop - stickyTop);
    } else {
      // Handle the case where timelineHeight is null
      console.warn("timelineHeight is null");
      console.log("Mobile Debug:", {
        scrollTop,
        timelineHeight,
        containerHeight,
        containerTop,
        stickyTop,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const CurrentComponent = useMemo(
    () =>
      currItem?.component
        ? () => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {currItem.component()}
            </motion.div>
          )
        : "div",
    [currItem]
  );
  const timelineHeight = timelineRef.current?.getBoundingClientRect().height;
  return (
    <section id="roadmap" className="2xl:mx-72 xl:mx-24 lg:mx-8">
      <div className="flex flex-col justify-center items-center ">
        <div className="mb-10 w-fit">
          <h1 className="text-midnightgreen text-6xl max-md:text-4xl font-bold text-center">
            My Latest Work
          </h1>
          <img
            src="./seablue-underline.svg"
            className="w-full max-lg:w-full m-auto"
          />
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center ">
        <div className="flex container" ref={timelineRef}>
          {screenSize.width >= 1024 ? (
            <div
              className="sticky top-1/3 self-start flex-1"
              ref={containerRef}
            >
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
          <div className="max-sm:ml-4">
            <div
              className="absolute top-0 lg:left-1/2 w-2 bg-seablue z-20 transition-all ease-out duration-200 rounded-t-lg"
              style={{ height: `${lineHeight}px` }}
              ref={stickyRef}
            ></div>
            <div
              className="absolute top-0 lg:left-1/2 w-2 bg-gray-200 z-10 rounded-t-lg"
              style={{ height: `${timelineHeight}px` }}
            ></div>
          </div>
          <div className="flex-1 ">
            {roadmapData.map((item, index) => (
              <>
                <div key={index} className="p-4 mx-8 mb-20 max-lg:mb-5">
                  <h3 className="mt-4 mb-2 font-bold text-2xl text-midnightgreen">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                  {item.link != "" ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-seablue hover:underline mt-2 inline-block"
                    >
                      Visit Website
                    </a>
                  ) : null}
                </div>
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
                ) : null}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
