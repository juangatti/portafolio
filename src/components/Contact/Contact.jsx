import React from 'react'
import { useSelector } from 'react-redux'

export default function Contact() {

  const lenguage = useSelector((state) => state.lenguage)


  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
        <form method='POST' action='https://getform.io/f/16de45fd-7768-49b5-bb82-e885d24b29a1' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
              {
                (lenguage === "ENG_eng")
                ? <>
                
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                Contacto
                </p>
                <p className='text-gray-300 py-4'> 
                / Escribeme por el formulario o enviame un mail a - juanse10028@gmail
                </p>
                </>
                :<>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                Contact
                </p>
                <p className='text-gray-300 py-4'> 
                / Submit the form below or shoot me an email - juanse10028@gmail
                </p>
                </>
                
              }
                
            </div>
            {
              (lenguage === "ENG_eng")
              ?<>
                <input className='bg-[#ccd6f6]' type="text" placeholder='Nombre' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='E-mail' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message"  rows="10"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' >Colaboremos juntos!</button>
              </>
              :<>
              <input className='bg-[#ccd6f6]' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='E-mail' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message"  rows="10"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' >Let's Collaborate</button>
              </>
            }
            
        </form>
    </div>
  )
}
