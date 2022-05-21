import Link from 'next/link';
import Image from 'next/image';
import React, {useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { useRouter } from 'next/router';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();
  
    useEffect(() => {
        if (
          router.asPath === '/' ||
          router.asPath === '/' ||
          router.asPath === '/' ||
          router.asPath === '/'
        ) {
          setNavBg('transparent');
          setLinkColor('#ecf0f3');
        } else {
          setNavBg('#ecf0f3');
          setLinkColor('#1f2937');
        }
      }, [router]);
    
      const handleNav = () => {
        setNav(!nav);
      };
    
      useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []
      );

      return (
        <div
          style={{ backgroundColor: `${navBg}` }}
          className={
            shadow
              ? 'fixed w-full h-20 shadow-xl z-[100]'
              : 'fixed w-full h-20 z-[100]'
          }
        >
            <div className= 'flex cursor-pointer justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/#home'>
                <Image src='/../public/images/falconpng.png' 
                alt='/' 
                width='75' 
                height='75' 
                />
                </Link>
                <div>
                    <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                        <Link href='/#home'>
                            <li className= 'ml-10 text-sm uppercase hover:border-b' >Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className= 'ml-10 text-sm uppercase hover:border-b' >About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className= 'ml-10 text-sm uppercase hover:border-b' >Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className= 'ml-10 text-sm uppercase hover:border-b' >Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className= 'ml-10 text-sm uppercase hover:border-b' >Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu  size={25} />
                    </div>
                </div>
            </div>

             <div className={nav ? 'md:hidden fiexd left-0 top-0 w-full bg-black/70' :  ''}>
                 <div className= {nav ? 'fixed left-0 top-0 w-[75%] sm:w[60%] md:w[45%] h-screen bg-[lightgray] p-10 ease-in duration-500' 
                                      : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'} >
                     <div>
                         <div className='flex w-full items-center justify-between'>
                             <Image src= '/../public/images/falconpng.png' alt='/'
                             width='35' 
                             height='35' />
                             <div onClick={handleNav} className='rounded-full shadow-lg p-2 shadow-gray-700 cursor-pointer'>
                                 <AiOutlineClose />
                             </div>
                         </div>
                         <div className='border-b border-gray-500 my-4'>
                             <p className='w[85%] md:w-[90%] py-4'>
                                 "Lets Buid Something Amazing!" 
                             </p>
                         </div>
                     </div>
                     <div className='py-4 flex flex-col'>
                         <ul className='uppercase'>
                             <Link href='/#home'>
                                 <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                             </Link>
                             <Link href='/#about'>
                                 <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
                             </Link>
                             <Link href='/#skills'>
                                 <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
                             </Link>
                             <Link href='/#projects'>
                                 <li onClick={()=> setNav(false)} className='py-4 text-sm'>Projects</li>
                             </Link>
                             <Link href='/#contact'>
                                 <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
                             </Link>
                         </ul>
                         <div className='pt-40 '>
                             <p className='uppercase tracking-widest text-[black]'>
                                 Lets Connect
                             </p>
                             <div className='flex items-center justify-between my-14 w-full sm:w-[80%]'>
                                 <div className= 'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://www.linkedin.com/in/naif-alkhalaki-31591593/'>
                                 <FaLinkedinIn  /> 
                                 </Link>
                                 </div>
                                 <div className='rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://github.com/Falcon7code'>
                                 <FaGithub />
                                 </Link>
                                 </div>
                                 <div className= 'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                 <Link href='https://n.alkhalaki@gmail.com'>
                                 <AiOutlineMail />
                                 </Link>
                                 </div>
                                 <div className='rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                 <BsFillPersonLinesFill />
                                 </div>
                                 
                             </div>

                         </div>
                     </div>
                 </div>
             </div>
             
        </div>

    
  );
};

export default Navbar