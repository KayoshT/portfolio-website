import React, { useEffect, useState, useRef } from "react";

const TutorKeepComponent = () => {
  return (
    <div className="container shadow-lg border rounded-lg bg-white aspect-video">
      <div className="w-full h-5 outline rounded-t-lg outline-1 outline-gray-200">
        <div className="flex gap-1 items-center h-full px-3 bg-gray-50">
          <div className="bg-red-600 h-2 w-2 rounded-full"></div>
          <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
          <div className="bg-green-600 h-2 w-2 rounded-full"></div>
        </div>
      </div>
      <div className="h-full flex gap-2">
        <div className="h-full flex  flex-1 flex-col gap-1 p-2 border-r border-gray-200">
          <div className="w-full h-4 rounded-md bg-gray-200"></div>
          <div className="w-full h-4 rounded-md bg-gray-200"></div>
          <div className="w-full h-4 rounded-md bg-gray-200"></div>
          <div className="w-full h-4 rounded-md bg-gray-200"></div>
        </div>
        <div className="h-full flex-[4_1_0%] max-md:p-2 p-6">
          <div className="flex flex-col gap-2 h-full">
            <div className="border border-gray-200 rounded-lg h-full flex flex-col gap-1 p-2">
              <div>
                <h2 className="text-[0.5rem] text-left text-gray-900 font-semibold font-sans">
                  Merlin the Tutor
                </h2>
                <h3 className="text-[0.4rem] text-left text-gray-900 font-sans">
                  Hi! Are you looking for help with math problems?
                </h3>
              </div>
              <div className="relative">
                <div className="absolute inset-x-0 top-1 w-full max-md:h-2 h-4 rounded-md bg-pink-500"></div>
                <div className="relative w-full max-md:h-2 h-4 rounded-md bg-pink-400"></div>
              </div>
              <div className="relative max-md:mt-1 mt-2">
                <div className="absolute inset-x-0 top-1 w-full max-md:h-2 h-4 rounded-md bg-blue-700"></div>
                <div className="relative w-full max-md:h-2 h-4 rounded-md bg-blue-600"></div>
              </div>
              <div className="relative max-md:mt-1 mt-2">
                <div className="absolute inset-x-0 top-1 w-full max-md:h-2 h-4 rounded-md bg-yellow-500"></div>
                <div className="relative w-full max-md:h-2 h-4 rounded-md bg-yellow-400"></div>
              </div>
            </div>
            <div className="border-2 border-blue-400 rounded-lg h-5"></div>
          </div>
        </div>
        <div className="h-full flex-[2_1_0%] p-2 flex flex-col justify-around max-md:gap[2px] gap-1">
          <div className="border border-gray-200 rounded-md h-5 w-1/2"></div>
          <div className=" flex flex-col gap-1 border border-gray-200 rounded-lg p-1 h-1/2">
            <div className="w-full h-5 bg-gray-200"></div>
            <div className="w-full h-5 bg-gray-200"></div>
            <div className="w-full h-5 bg-gray-200"></div>
            <div className="w-full h-5 bg-gray-200"></div>
            <div className="w-full h-5 bg-gray-200"></div>
          </div>
          <img src="./wizard.svg" className="max-md:h-16 max-sm:h-12 h-24" />
        </div>
      </div>
    </div>
  );
};

export default TutorKeepComponent;
