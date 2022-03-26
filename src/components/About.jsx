import alexa from '../assets/alexa.png'

const About = () => {
  return (
    <div name="about" className="p-4 w-full bg-[#333399] text-[#ff00cc]">
     <div className="flex flex-col justify-center sm:items-center w-full">
     <div className="sm:text-center pb-2 pl-4">
        <p className="font-Fredoka tracking-[.10em] text-4xl font-bold inline border-b-4 border-white">
            About
        </p>
        <img className="sm:mx-auto py-8" src={alexa} alt="profile" width="100px" height="100px" />
      </div>
  
      <div></div>

      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl sm:text-4xl font-bold">
             <p className="font-Readex font-bold">Hi! I'm Alexa, I'm happy to meet you. Please take a look around!</p>
           </div>
          <div>
               <p className="mb-10 text-white py-2"> 
                I am passionate developer who enjoys working with the code on a daily basis. I design and develop software products for clients and also as a hobby. I am dedicated to the cause and hard-working. I am also a proud moma of a fur-baby Kion The Lion King. 
               </p>
           </div>
        </div>
    </div>
    </div>
  )
}

export default About