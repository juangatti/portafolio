import React from 'react'
import English from './English'
import Spanish from './Spanish'
import {useSelector} from 'react-redux'




export default function Home() {

  const lenguage = useSelector ((state) => state.lenguage)



  return (
    <div name='home' className='w-full  h-screen bg-[#0a192f]'>

      {/* Container */}
      {(lenguage === "ENG_eng")
      ?<Spanish/>
      :<English/>

      }


    </div>
  )
}
