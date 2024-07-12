import React, { useEffect, useState, useRef } from "react";

const EscoComponent = () => {
  return (
    <div className="container shadow-lg border rounded-lg bg-white aspect-video">
      <div className="w-full h-5 outline rounded-t-lg outline-1 outline-gray-200">
        <div className="flex gap-1 items-center h-full px-3 bg-gray-50">
          <div className="bg-red-600 h-2 w-2 rounded-full"></div>
          <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
          <div className="bg-green-600 h-2 w-2 rounded-full"></div>
        </div>
      </div>
      <div className="h-full flex">
        <div className="h-full flex  flex-1 flex-col gap-1 p-2 border-r border-gray-200">
          <div className="w-full h-4 rounded-md bg-gray-200"></div>
          <div className="w-full h-4 rounded-md bg-gray-200"></div>
          <div className="w-full h-4 rounded-md bg-gray-200"></div>
        </div>
        <div className="h-full flex-[4_1_0%] p-2  border-r border-gray-200">
          <div className="flex flex-col gap-1 h-full">
            <div className="w-full h-5 border border-gray-200 rounded-lg p-[0.125rem] pl-1">
              <img className="h-full" src="./search.svg" alt="Search" />
            </div>
            <div className="grid grid-cols-4 gap-2 pt-2">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="w-full aspect-square border border-gray-200 rounded-md"
                >
                  <div className="bg-gray-200 rounded-sm m-1 h-4/6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full flex-[2_1_0%] p-2 flex flex-col gap-1 border-gray-200">
          <div className="border border-gray-200 rounded-lg h-5"></div>
          <div className=" flex flex-col gap-3 border border-gray-200 rounded-lg h-full">
            <h1 className="text-left font-semibold pl-2">Cart</h1>
            <img className="p-2" src="./empty-cart.svg" />
            <div className="bg-blue-700 h-6 rounded-lg m-2 text-sm text-white font-semibold text-center">
              Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscoComponent;
