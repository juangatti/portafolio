import React from 'react'
import WorkImg from '../../assets/workImg.jpeg'
import realEstate from '../../assets/realestate.jpg'
import { useSelector } from 'react-redux'

export default function Work() {

    const lenguage = useSelector((state) => state.lenguage)

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justifiy-center w-full h-full' >
            <div className='pb-8' >
                {
                    (lenguage === "ENG_eng")
                    
                    ?<> 
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600' >
                    Trabajos
                    </p>
                    <p className='py-6'>/ Revisa mis trabajos recientes</p>
                    </>
                    :<>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600' >
                    Work
                    </p>
                    <p className='py-6'>/ Check some of my recent work</p>
                    </>
                    
                }
            </div>

        {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div
                 style={{backgroundImage: `url(${WorkImg})`}} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                        Recipes Calendar App 
                        </span>
                        <div className='pt-8 text-center' >
                            <a href="https://recipecalendar.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ' >
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/AgustinKowalczuk/PG-FoodCalendar">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Grid Item */}
                <div
                 style={{backgroundImage: `url(${realEstate})`}} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                        Countryvity App
                        </span>
                        <div className='pt-8 text-center' >
                            <a href="/https://countryvity-juangatti.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ' >
                                    Demo
                                </button>
                            </a>
                            <a href="/https://github.com/juangatti/PI-Countries">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                   {/* Grid Item */}
                   <div
                 style={{backgroundImage: `url(${WorkImg})`}} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center' >
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ' >
                                    Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Grid Item */}
                <div
                 style={{backgroundImage: `url(${realEstate})`}} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center' >
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ' >
                                    Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                   {/* Grid Item */}
                   <div
                 style={{backgroundImage: `url(${WorkImg})`}} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center' >
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ' >
                                    Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Grid Item */}
                <div
                 style={{backgroundImage: `url(${realEstate})`}} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center' >
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ' >
                                    Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
