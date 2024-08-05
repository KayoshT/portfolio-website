import React, { useEffect, useState, useRef } from "react";

const CryptoComponent = () => {
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
        <img src="./crypto.jpg" />
      </div>
    </div>
  );
};

export default CryptoComponent;
