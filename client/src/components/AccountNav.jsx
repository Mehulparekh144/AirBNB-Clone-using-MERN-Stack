import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const AccountNav = () => {
    const {pathname} = useLocation()
    let subpage = pathname.split('/')?.[2]
    if(subpage === undefined){
        subpage = 'profile'
    }
    function linkClasses(type = null) {
        let classes = 'py-2 px-6 inline-flex gap-1 '
        if (type == subpage) {
            classes += 'bg-primary text-white rounded-full '
        }
        else {
            classes += 'bg-gray-200 rounded-full'
        }
        return classes
    }
    return (
        <div>
            <nav className='flex flex-col gap-3 w-full md:flex-row mt-10 justify-center md:gap-4 mb-8 '>
                <Link className={linkClasses('profile')} to={'/account'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                    My Profile</Link>
                <Link className={linkClasses('booking')} to={'/account/booking'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
                    My Bookings</Link>
                <Link className={linkClasses('places')} to={'/account/places'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                    My Accomodations</Link>
            </nav>
        </div>
    )
}

export default AccountNav;