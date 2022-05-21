import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[red]'>About</p>
                <h2>Who am I</h2>
                <p className='py-2 indent-2'> I am a self taught Front-Developer</p>              
                <p className='py-2 indent-5'>
                Exceptionally creative and dependable Entry Level Web Developer with a stellar customer service record and superb work ethic.
                 Broadly and deeply knowledgeable in a wide variety of computer languages as well as the principles and techniques of website construction and maintenance.
                 Highly adept at conveying complex technical information to a variety of professional and lay audiences in a clear and understandable manner.
                </p>    
                <p className='py-2 indent-5'>
                Exceptionally creative and dependable Entry Level Web Developer with a stellar customer service record and superb work ethic. 
                Broadly and deeply knowledgeable in a wide variety of computer languages as well as the principles and techniques of website construction and maintenance. 
                Highly adept at conveying complex technical information to a variety of professional and lay audiences in a clear and understandable manner.
                </p>
                <p className="py-2 underline cursor-pointer">Check Out Some Of My work</p>

            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
              <Image className='rounded-xl' src='/../public/images/aboutme.jpg' alt=""  width='999rem' 
                height='999rem' />
            </div>
        </div>
    </div>
  )
}

export default About