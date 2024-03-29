import React from 'react'

import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Node from '../../assets/node.png';
import GitHub from '../../assets/github.png';
import Tailwind from '../../assets/tailwind.png';
import Mongo from '../../assets/mongo.png';
import Next from '../../assets/nextjs.svg'
import TypeScript from '../../assets/typescript.svg'
import PostgreSql from '../../assets/postgresql.svg'
import Bootstrap from '../../assets/bootstrap.svg'
import { useSelector } from 'react-redux';

export default function Skills() {

  const lenguage = useSelector((state) => state.lenguage)

  return (
    <div name='skills' className='w-full h-screen bg-[#19192e] text-gray-300'>
        {/*  Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> 
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            {
              (lenguage === "ENG_eng")
              ?<p className='py-4'>/ Estas son las tecnologias con las que trabaje</p>
              :<p className='py-4'>/ These are the technologies I've worked with</p>
            }
            
        </div>
   

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto ' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto ' src={CSS} alt="CSS icon" />
                <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto ' src={JavaScript} alt="JavaScript icon" />
                <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto ' src={TypeScript} alt="TypeScript" />
                <p className='my-4'>TypeScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto ' src={ReactImg} alt="ReactImg icon" />
                <p className='my-4'>React</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto ' src={Next} alt="Next.js" />
                <p className='my-4'>Next.js</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto ' src={GitHub} alt="GitHub" />
                <p className='my-4'>GitHub</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto ' src={Node} alt="NodeJs" />
                <p className='my-4'>NodeJS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto ' src={Mongo} alt="Mongo icon" />
                <p className='my-4'>MongoDB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto ' src={PostgreSql} alt="PostgreSql" />
                <p className='my-4'>PostgreSql</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto ' src={Tailwind} alt="TailWind" />
                <p className='my-4'>TailWind</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto ' src={Bootstrap} alt="Boostrap" />
                <p className='my-4'>Boostrap</p>
              </div>
            </div>
        </div>
    </div>
  )
}
