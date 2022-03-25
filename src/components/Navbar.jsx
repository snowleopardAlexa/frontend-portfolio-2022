//import { FaBars } from 'react-icons/FaBars'

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#333399] text-white">
       <p className="font-[Baloo+Tamma+2]">snowleopardAlexa</p>
        {/* menu */}
        <div>
            <ul className="flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        {/* hamburger menu */}
        <div className="hidden">
           
        </div>
        {/* mobile menu */}
        <ul className="hidden">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>

        {/* social icons */}
        <div className="hidden"></div>
    </div>
  )
}

export default Navbar