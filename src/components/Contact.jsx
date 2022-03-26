import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#333399] flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/cae12ecf-2538-4aa5-b6a9-da75d7656d47" className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-white text-[#ff00cc]">Contact</p>
            <p className="text-white py-4">Submit the form below or shoot me an email - aleksandravslomska@gmail.com</p>
          </div>
          <input className="my-2 p-3 bg-[#ccd6f6]" type="text" placeholder="Name" name="name" />
          <input className="my-2 p-3 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" />
          <textarea className="my-2 p-3 bg-[#ccd6f6]" name="message" rows="10" placeholder="Message"></textarea>
          <button className="text-white border-2 hover:bg-[#ff00cc] hover:border-[#ff00cc] px-4 py-3 my-8 mx-auto flex items-center">Let's work together!</button>
      </form>
    </div>
  )
}

export default Contact