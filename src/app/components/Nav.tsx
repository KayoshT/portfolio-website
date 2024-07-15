import React from "react";

const Nav = () => {
  return (
    <nav className="absolute p-4 flex items-center justify-center left-0 right-0 m-auto">
      <div className="bg-white/30 p-5 rounded-3xl transpar">
        <div className="flex space-x-10 text-xl font-medium h-10 ">
          <div className="h-full">
            <img className="h-full " src="./github.svg" alt="Github" />
          </div>
          <div className="h-full">
            <img
              className="h-full stroke-slate-700 fill-slate-700"
              src="./linkedin.svg"
              alt="divnkedIn"
            />
          </div>
          <div className="h-full">
            <img
              className="h-full stroke-slate-700 fill-slate-700"
              src="./email.svg"
              alt="Email"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
