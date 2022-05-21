import React from "react";
import Link from "next/Link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's Build Something Together
          </p>
          <h1 className="py-4 text-gray-700">
            Hey, I'm <span className="text-[red]">Naif</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a self-driven front-end developer and have been in the industry
            for more than 2 years. I have a keen eye for detail and most of my
            working life has been dedicated to creating stunning websites for
            clients. I am a self-driven front-end developer and have been in the
            industry for more than 2 years. I have a keen eye for detail and
            most of my working life has been dedicated to creating stunning
            websites for clients
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/naif-alkhalaki-31591593/">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/Falcon7code">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://n.alkhalaki@gmail.com">
                <AiOutlineMail />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
