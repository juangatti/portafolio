import React from 'react'
import {  FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import Cv_ENG from '../../assets/CV_ENG.pdf'
import Cv_ES from '../../assets/CV_ES.pdf'

export default function Footer() {

    const lenguage = useSelector((state) => state.lenguage)

    return (
        <div className='flex lg:hidden  w-full h-[120px] bg-[#0a192f]  justify-center items-center p-4 '>
            <ul className='absolute right-0'>
                <li className='flex justify-between items-center '>
                    <a className='flex justify-between items-center w-full text-gray-300 hover:text-pink-600 hover:border-pink-600 '
                    href="https://www.linkedin.com/in/juan-sebastian-gatti/">
                        Linkedin <FaLinkedin size ={20}/>
                    </a>
                </li>
                <li className='flex justify-between items-center'>
                    <a className='flex justify-between items-center w-full text-gray-300 hover:text-pink-600 hover:border-pink-600 '
                    href="https://github.com/juangatti">
                        Github <FaGithub size={20} />
                    </a>
                </li>
                <li className='flex justify-between items-center'>
                    <a className='flex justify-between items-center w-full text-gray-300 hover:text-pink-600 hover:border-pink-600'
                    href="mailto:juanse10028@gmail.com">
                        Email <HiOutlineMail size={20} />
                    </a>
                </li>
                <li className='flex justify-between items-center'>
                    {(lenguage === 'ENG_eng')
                        ? <a className='flex justify-between items-center w-full text-gray-300 hover:text-pink-600 hover:border-pink-600'
                        href={Cv_ES} download={Cv_ES}>
                            Curriculum <BsFillPersonLinesFill size={20}/>
                        </a>
                        : <a className='flex justify-between items-center w-full text-gray-300 hover:text-pink-600 hover:border-pink-600'
                        href={Cv_ENG} download={Cv_ENG}>
                            Resume <BsFillPersonLinesFill size={20}/>
                        </a>
                    }
                </li>
            </ul>
        </div>
    )
}
