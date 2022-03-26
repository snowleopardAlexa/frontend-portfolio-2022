import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
  <div name="home" className="w-full h-screen sm:text-center bg-[#333399]">
    {/* container */}
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      <p className="text-white py-4 font-Roboto">Hi, call me Alexa!</p>
      <h1 className="text-4xl sm:text-7xl font-bold text-[#ff00cc] font-Fredoka">Aleksandra Slomska</h1>
      <h2 className="text-4xl sm:text-7xl font-bold text-[#ff00cc]">Full Stack Developer</h2>
      <p className="sm:text-center text-white py-6">I'm a full-stack developer specializing in front-end development. I am applying 
         the best UX/UI practices to my projects ensuring webs and apps high performance. I am in 
         love with React Native. I have always wanted to build mobile apps and web apps so I do it now!
      </p>
      <div>
          <button className="text-white mx-auto group border-2 px-6 py-3 my-2 flex items-center hover:bg-white-600 hover:border-pink-600 hover:text-[#ff00cc]">
           <Link className="font-Fredoka tracking-[.10em]" to="projects">View Projects</Link> 
            <span className="group-hover:rotate-90 duration-300">
             <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
      </div>
    </div>
    </div>
  )
}

export default Home