import React,{useState} from 'react'
import {Link} from 'react-scroll'
import { useSelector } from 'react-redux'


export default function MobileMenu() {

    const [nav, setNav] = useState(false)
    const lenguage = useSelector((state)=> state.lenguage)

    const handleClick = () => setNav(!nav)
 
    return (
    <>
    
            <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
            <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
            </li>
            <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
            </li>
            <li className='py-6 text-4xl'>
                {
                    (lenguage === "ENG_eng")
                    ?<Link onClick={handleClick} to='work' smooth={true} duration={500}>
                    Trabajos
                    </Link>
                    :<Link onClick={handleClick} to='work' smooth={true} duration={500}>
                    Work
                    </Link>
                }
                    
            </li>
            <li className='py-6 text-4xl'>
                {
                  (lenguage === "ENG_eng")
                  ?<Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                  Contacto
                </Link>
                  :<Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                  Contact
                </Link>    
                }
                
            </li>
        
    
    </>
  )
}
