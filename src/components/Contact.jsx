import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
    <div name="contact" className="w-full h-screen bg-[#333399] flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/cae12ecf-2538-4aa5-b6a9-da75d7656d47" className="flex flex-col max-w-[600px] w-full sm:text-center">
          <div className="pb-8">
            <p className="font-Fredoka tracking-[.10em] text-4xl font-bold inline border-b-4 border-white text-[#ff00cc]">Contact</p>
            <p className="text-white py-4">Submit the form below or shoot me an email - aleksandravslomska@gmail.com</p>
          </div>
          <input className="my-2 p-3 bg-[#ccd6f6]" type="text" placeholder="Name" name="name" />
          <input className="my-2 p-3 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" />
          <textarea className="my-2 p-3 bg-[#ccd6f6]" name="message" rows="10" placeholder="Message"></textarea>
          <button className="font-Fredoka tracking-[.10em] text-white border-2 hover:bg-[#ff00cc] hover:border-[#ff00cc] px-4 py-3 my-8 mx-auto flex items-center">Let's work together!</button>
      </form>
    </div>
    <div class="bg-[#333399] sm:text-center">
    <h5 class="text-xl text-white font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
        <div className="space-x-[20px] py-6 flex sm:justify-center xl:justify-start">
        <a href="https://github.com/snowleopardAlexa"><FaGithub  color="#fff" size={30} /></a> 
        <a href="https://www.linkedin.com/in/aleksandra-slomska-1039681b3/"><FaLinkedin  color="#fff" size={30}/></a>
        </div>
        <p className="py-12 text-white">Aleksandra Slomska &copy; 2022</p>
    </div>
  </>
  )
}

export default Contact