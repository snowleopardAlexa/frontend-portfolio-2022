import React from "react";
import { BsTags } from "react-icons/bs";
import { projects } from "../data/data";

const Projects = () => {
  return (
      <>
    <div name="projects" className="w-full bg-[#333399] text-white">
    {/* Container */}
    <div className="max-w-[1000px] mx-auto p-8 sm:p-4 flex flex-col justify-center sm:text-center w-full h-full">
        <div>
            <p className=" font-Fredoka tracking-[.10em] text-4xl font-bold inline border-b-4 border-white text-[#ff00cc]">Projects</p>
            <p className="py-4">These are my projects</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8">
        {projects.map(({ id, title, image, description, tags }) => (
            <div key={id} className="bg-[#262666] rounded-md py-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-110 duration-500">
              <img className="object-cover h-48 w-96" src={image} alt="project" />
                <h2 className="text-[#ff00cc] text-2xl my-4">{title}</h2>
                <p className="py-2 ml-2 mr-2">{description}</p>
                <div>
                    <div className="text-[#ff00cc] py-2">Stack</div>
                    {tags.map((tag, i) => (
                    <div className="text-white">
                      <div key={id}>{tag}</div>
                    </div> 
                    ))}  
                </div>    
            </div>     
          ))}
        </div>
    </div>
   </div>
   </>
  );
};

export default Projects;
