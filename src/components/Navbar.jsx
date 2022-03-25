import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#333399] text-white">
       <p className="font-[Baloo+Tamma+2]">snowleopardAlexa</p>
        {/* menu */}
        <div className="hidden md:flex">
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        {/* hamburger menu */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars color="#ff00cc"/> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#333399] flex flex-col justify-center items-center"}>
            <li className="py-6 text-4xl">Home</li>
            <li className="py-6 text-4xl">About</li>
            <li className="py-6 text-4xl">Skills</li>
            <li className="py-6 text-4xl">Work</li>
            <li className="py-6 text-4xl">Contact</li>
        </ul>

        {/* social icons */}
        <div className="hidden"></div>
    </div>
  )
}

export default Navbar