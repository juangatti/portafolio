import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

export default function English() {
  return (
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Juan  Gatti</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] '> I'm a developer with academic experience in the creation of applications
        of different scales, who likes to develop and improve user experiences. I am currently perfecting
        the technologies I learned over the past year</p>
        <div>
          <button className=' text-white group border-2 px-6 py-3 my-2 flex  items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <Link to='work' className='group-hover:rotate-90 duration-300' smooth={true} duration={500}>
              <HiArrowNarrowRight className='ml-3 ' />
            </Link>
          </button>
        </div>
      </div>
  )
}
