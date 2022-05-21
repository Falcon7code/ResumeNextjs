import React from 'react';
import Link from 'next/Link';
import Image from 'next/image';
import HomeImg from '../public/images/home.png'
import managementImage from '../public/images/reactapp.png';
import myCodeimg from '../public/images/mycode.png';
import hairCut from '../public/images/haircut.png';
import Projectitems from './Projectitems';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240ox] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-red-700'>
                Projects
            </p>
            <h2 className='py-4'>My Work</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <Projectitems
                 title='Crypto' 
                 backgroundImg={managementImage} 
                 projectUrl='/property'
                 />
                 <Projectitems
                 title='Home' 
                 backgroundImg={HomeImg} 
                 projectUrl='/property'
                 />
                <Projectitems
                 title='Stock ' 
                 backgroundImg={myCodeimg} 
                 projectUrl='/property'
                 />
                 <Projectitems
                 title='Barber Shop' 
                 backgroundImg={hairCut} 
                 projectUrl='/property'
                 />

            </div>
        </div>
    </div>
  );
};

export default Projects