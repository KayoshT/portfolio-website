import React from "react";
import { roadmapData } from "../data/roadmapData";
const Projects = () => {
  return (
    <section id="projects" className="px-36">
      <div className=" grid grid-cols-3">
        {roadmapData.map((item, index) => (
          <div className="w-full h-20 text-center outline-1 outline-slate-900">
            {item.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
