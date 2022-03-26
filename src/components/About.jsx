const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#333399] text-[#ff00cc]">
     <div className="flex flex-col justify-center items-center w-full h-full">

        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-white">
             About
           </p>
          </div>
        </div>

        <div></div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
           <div className="sm:text-right text-4xl font-bold">
             <p className="font-Readex">Hi! I'm Alexa, nice to meet you. Please take a look around</p>
           </div>
           <div>
               <p className="text-white py-2"> I am a passionate about working and building excellent software that improves
                   the lives of those around me. I specliazine in front ened and i wish to become
                   a great developer i think...
               </p>
           </div>
        </div>
    </div>
    </div>
  )
}

export default About