import React, { useEffect, useState, useRef } from "react";

const EscoComponent = () => {
  return (
    <div className="relative max-w-lg shadow-lg border rounded-lg aspect-video">
      <div className="w-full h-5 outline rounded-t-lg outline-1 outline-gray-200">
        <div className="flex gap-1 items-center h-full px-1">
          <div className="bg-red-600 h-2 w-2 rounded-full"></div>
          <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
          <div className="bg-green-600 h-2 w-2 rounded-full"></div>
        </div>
      </div>
      <div className="h-full  w-24 border border-l-2 border-gray-200">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default EscoComponent;
