import alexa from '../assets/alexa.png'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#333399] text-[#ff00cc]">
     <div className="flex flex-col justify-center items-center w-full h-full">
     <div className="sm:text-right pb-2 pl-4">
        <p className="font-Fredoka tracking-[.10em] text-4xl font-bold inline border-b-4 border-white">
            About
        </p>
        <img className="mx-auto py-8" src={alexa} alt="profile" width="100px" height="100px" />
      </div>
  
      <div></div>

      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
             <p className="font-Readex font-bold">Hi! I'm Alexa, nice to meet you. Please take a look around</p>
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