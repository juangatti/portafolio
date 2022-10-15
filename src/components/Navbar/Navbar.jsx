import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Cv_ENG from '../../assets/CV_EN.pdf'
import Cv_ES from '../../assets/CV_ES.pdf'
import JGLogo from '../../assets/JGLogo.png'
import { useSelector } from 'react-redux'
import MenuEng from './Menu_eng';
import { Link } from 'react-scroll'





export default function Navbar() {

    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)

    const lenguage = useSelector((state) => state.lenguage)


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300' >
            <div>
                <img src={JGLogo} alt="Logo" style={{ width: '80px' }} />
            </div>


            {/*menu*/}

            <MenuEng />

            {/* Hamburger*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav
                ? 'hidden'
                : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}
                        className='hover:text-pink-600 hover:border-pink-600'>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}
                        className='hover:text-pink-600 hover:border-pink-600'>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}
                        className='hover:text-pink-600 hover:border-pink-600'>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {
                        (lenguage === "ENG_eng")
                            ? <Link onClick={handleClick} to='work' smooth={true} duration={500}
                                className='hover:text-pink-600 hover:border-pink-600'>
                                Trabajos
                            </Link>
                            : <Link onClick={handleClick} to='work' smooth={true} duration={500}
                                className='hover:text-pink-600 hover:border-pink-600'>
                                Work
                            </Link>
                    }

                </li>
                <li className='py-6 text-4xl'>
                    {
                        (lenguage === "ENG_eng")
                            ? <Link onClick={handleClick} to='contact' smooth={true} duration={500}
                                className='hover:text-pink-600 hover:border-pink-600'>
                                Contacto
                            </Link>
                            : <Link onClick={handleClick} to='contact' smooth={true} duration={500}
                                className='hover:text-pink-600 hover:border-pink-600'>
                                Contact
                            </Link>
                    }

                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://www.linkedin.com/in/juan-sebastian-gatti/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://github.com/juangatti">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="mailto:juanse10028@gmail.com">
                            Email<HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        {(lenguage === 'ENG_eng')
                            ? <a className='flex justify-between items-center w-full text-gray-300'
                                href={Cv_ES} download={Cv_ES}>
                                Curriculum <BsFillPersonLinesFill size={30} />
                            </a>
                            : <a className='flex justify-between items-center w-full text-gray-300'
                                href={Cv_ENG} download={Cv_ENG}>
                                Resume <BsFillPersonLinesFill size={30} />
                            </a>
                        }
                    </li>
                </ul>
            </div>

        </div>
    )
}
