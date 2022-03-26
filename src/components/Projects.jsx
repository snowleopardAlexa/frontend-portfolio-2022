import React from "react";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <div name="work" className="w-full bg-[#333399] text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-white text-[#ff00cc]">
            Projects
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        {/* project card */}
        {projects.map(({ id, title, image, description }) => (
           <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
           <div key={id} className="bg-[#262666] rounded-md py-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-110 duration-500">
               <img className="object-cover h-48 w-96 hover:object-scale-down" src={image} alt="project" />
               <h2 className="text-2xl my-4">{title}</h2>
               <p className="py-2">{description}</p>
           </div>
           </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
