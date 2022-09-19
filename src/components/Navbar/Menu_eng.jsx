import React from 'react'
import { Link } from 'react-scroll'
import { useSelector } from 'react-redux'
import LenguageButton from '../Lenguage/lenguageButton'


export default function Menu_eng() {


    const lenguage = useSelector((state) => state.lenguage)

    return (
        <>
            <ul className='hidden md:flex' >
                <li >
                    <Link className=' hover:text-pink-600 hover:border-pink-600' to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className=' hover:text-pink-600 hover:border-pink-600' to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link className=' hover:text-pink-600 hover:border-pink-600' to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    {
                        (lenguage === "ENG_eng")
                            ? <Link className=' hover:text-pink-600 hover:border-pink-600' to='work' smooth={true} duration={500}>
                                Trabajos
                            </Link>
                            : <Link className=' hover:text-pink-600 hover:border-pink-600' to='work' smooth={true} duration={500}>
                                Work
                            </Link>
                    }
                </li>
                <li>
                    {
                        (lenguage === "ENG_eng")
                            ? <Link className=' hover:text-pink-600 hover:border-pink-600' to='contact' smooth={true} duration={500}>
                                Contacto
                            </Link>
                            : <Link className=' hover:text-pink-600 hover:border-pink-600' to='contact' smooth={true} duration={500}>
                                Contact
                            </Link>
                    }
                </li>
                <LenguageButton/>
            </ul>
        </>
    )
}
