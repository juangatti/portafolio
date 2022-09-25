import React,{useState} from 'react'

import { useSelector } from 'react-redux'


export default function MobileMenu() {

    const [nav, setNav] = useState(false)
    const lenguage = useSelector((state)=> state.lenguage)

    const handleClick = () => setNav(!nav)
 
    return (
    <>
    
            
        
    
    </>
  )
}
