import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { es_ES, eng_ENG } from '../../actions/actions';
import SpainImg from '../../assets/spain.png';
import UkImg from '../../assets/united-kingdom.png'



export default function LenguageButton() {

  const dispatch = useDispatch();




  const [lenguage, setLenguage] = useState("")

  const handleLenguage = (e) => {
    setLenguage(e.target.value)
  }

  useEffect(() => {
    if (lenguage === "ENG_eng") dispatch(eng_ENG(lenguage))
    else if (lenguage === "ES_es") dispatch(es_ES(lenguage))
  }, [dispatch, lenguage])





  return (
    <div >

      <div style={{ backgroundImage: `url(${UkImg})` }} className='rounded content-img'>
        <button className='w-[16px] text-transparent' onClick={(e) => handleLenguage(e)} value='ES_es' >
          .
        </button>
      </div>



      <div style={{ backgroundImage: `url(${SpainImg})` }} className=' rounded content-img'>

        <button className='w-[16px] text-transparent' onClick={(e) => handleLenguage(e)} value='ENG_eng'>
          .
        </button>
      </div>



    </div>
  )
}
