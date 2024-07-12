import React from "react";
import { roadmapData } from "../data/roadmapData";
const Projects = () => {
  return (
    <section id="projects" className=" xl:px-96 lg:px-72">
      <div className=" grid grid-cols-3 place-items-stretch gap-4">
        {roadmapData.map((item, index) => (
          <div className="flex items-start justify-center text-center aspect-square border border-gray-200 bg-gray-100 rounded-lg">
            {item.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
