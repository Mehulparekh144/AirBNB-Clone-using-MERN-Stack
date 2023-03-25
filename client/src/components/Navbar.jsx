import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../userContext'
import globe from '../assets/world-globe.png'

const Navbar = () => {
    const {user} = useContext(UserContext)
    return (
        <div>
            <header className='flex flex-col  gap-3 md:flex-row justify-center md:justify-evenly items-center md:gap-3'>
                <Link to='/' className='flex items-center gap-3'>
                    <img src={globe} alt="" className='w-[40px]' />
                    <span className='font-bold text-xl text-primary'>airglobe</span>

                </Link>
                <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-200'>
                    <div>Anywhere</div>
                    <div className=' border-l border-gray-300'></div>
                    <div>Any week</div>
                    <div className=' border-l border-gray-300'></div>
                    <div>Guest</div>
                    <button className='bg-primary text-white p-1 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </button>
                </div>
                <Link to={user?'account':'/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-200'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </div>
                    <div  className='bg-gray-500 text-white rounded-full border border-gray-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1 overflow-hidden">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>

                    </div>
                    {user && (
                        user.name
                    )}

                </Link>
            </header>

        </div>
    )
}

export default Navbar
