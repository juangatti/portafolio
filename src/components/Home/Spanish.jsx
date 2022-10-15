import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'



export default function Spanish() {
  return (
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >
        <p className='text-pink-600'>Hola, mi nombre es</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Juan  Gatti</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Desarrollador Full Stack.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] '> Soy un desarrollador con experiencia académica en la creacién de aplicaciones 
        de distintas escalas,que le gusta desarrollar y mejorar las experiencias para el usuario. Actualmente me encuentro perfeccionando 
        las tecnologías que aprendí a lo largo del último año</p>
        <div>
          <button className=' text-white group border-2 px-6 py-3 my-2 flex  items-center hover:bg-pink-600 hover:border-pink-600'>
            Ver Trabajos
            <Link to='work' className='group-hover:rotate-90 duration-300' smooth={true} duration={500}>
              <HiArrowNarrowRight className='ml-3 ' />
            </Link>
          </button>
        </div>
      </div>

  )
}
