import React from 'react'
import { useSelector } from 'react-redux'


export default function About() {

    const lenguage = useSelector ((state) => state.lenguage)



  return (
    <div name='about' className='w-full h-screen bg-[#19192e] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'> About </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold' >
                        {
                            (lenguage === "ENG_eng")
                            ?<p>Hola! Soy Juan, encantado de conocerte.</p>
                            :<p>HI. I'm Juan, nice to meet you. Please take a look around.</p>
                        }
                    </div>
                    <div> {
                        (lenguage === "ENG_eng")
                        ?<p> Soy una persona muy curiosa que siempre esta en la búsqueda de como funcionan las cosas e intentar 
                            mejorarlas para para facilitarle la vida a las personas. Esto me a ayudado a lo largo de mi camino en 
                            la programación</p>
                        :<p> I am a very curious person who is always looking for how things work and trying
                        improve them to make life easier for people. This has helped me along my way in
                        The programing</p>
                        }
                        
                    </div>
                </div>
        </div>
    </div>
  )
}
