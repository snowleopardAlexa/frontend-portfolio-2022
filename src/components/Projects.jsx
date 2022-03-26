import React from 'react'
import linkedinclone from '../assets/linkedin-clone.png'
import uberclone from '../assets/linkedin-clone.png'
import mediumclone from '../assets/linkedin-clone.png'
import instagramclone from '../assets/linkedin-clone.png'
import huluclone from '../assets/linkedin-clone.png'
import eden from '../assets/eden.png'

const Projects = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#333399]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Projects</p>
              <p className="py-6">Check out some of my recent work</p>
          </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[] group container rounded-md flex justify-center items-center mx-auto content-div">
             {/* hover effect */}
              <div className="">
                <span>
                
                </span>  
                <div>
                    <a href="/">
                        <button></button>
                    </a>
                    <a href="/">
                        <button></button>
                    </a>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Projects