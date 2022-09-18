import React from 'react'
import { useSelector } from 'react-redux'


export default function About() {

    const lenguage = useSelector ((state) => state.lenguage)



  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
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
                            ?<p>Hola!. Soy Juan, encantado de conocerte. Por favor hecha un vistazo</p>
                            :<p>HI. I'm Juan, nice to meet you. Please take a look around.</p>
                        }
                    </div>
                    <div> {
                        (lenguage === "ENG_eng")
                        ?<p> Soy un apasionado de construir excelente software que mejora la vida de los que me rodea. 
                        Me especializo en la creacion de software que van para personas individuales a pequeños 
                        negocios de todos los rumbos. ¿Que harias si tuvieras un experto en software disponible 
                        al alcanze de tu mano?</p>
                        :<p> I am passionate about building excellent sofware that improves
                        the live of those around me. I specialize in creating sofware
                        for clients ranging from individuals and small-businesses all the
                        way to large enterprise corporations. What would you do if had 
                        a software expert available at your fingerprints?</p>
                        }
                        
                    </div>
                </div>
        </div>
    </div>
  )
}
