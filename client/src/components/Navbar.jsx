import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../userContext'

const Navbar = () => {
    const {user} = useContext(UserContext)
    return (
        <div>
            <header className='flex justify-between'>
                <Link to='/' className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#5D3891" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                    </svg>
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
