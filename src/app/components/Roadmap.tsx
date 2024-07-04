"use client";

import React, { useEffect, useState } from "react";
import { roadmapData } from "../data/roadmapData";

const Roadmap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currItem, setCurrItem] = useState({});
  const [imagePosition, setImagePosition] = useState(0);
  const [fromTop, setFromTop] = useState(0);
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const itemHeight = window.innerHeight / 2;
    const newIndex = Math.min(roadmapData.length - 1, scrollTop / itemHeight);
    setCurrentIndex(newIndex);
    setFromTop(scrollTop);
    console.log(Math.floor(newIndex));
    setCurrItem(roadmapData[Math.floor(newIndex)]);
    setImagePosition((scrollTop / document.documentElement.scrollHeight) * 100);
    console.log(newIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" relative container mx-auto my-10 px-36">
      <div className="grid lg:grid-cols-2 gap-4">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500"
          style={{ height: `${(currentIndex / roadmapData.length) * 100}%` }}
        ></div>
        <div
          className="relative hidden lg:flex mx-8"
          style={{ top: `${(currentIndex / roadmapData.length) * 100}%` }}
        >
          <img
            src={currItem.image}
            alt={currItem.title}
            className="w-full h-56 rounded-lg"
          />
        </div>
        {/* Empty left column for larger screens */}
        <div>
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
