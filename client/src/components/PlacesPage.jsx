import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AccountNav from './AccountNav';
import axios from 'axios';
import PlaceImg from './PlaceImg';
import Loading from './Loading';



const PlacesPage = () => {

    const [places, setPlaces] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        axios.get('/user-places').then(({ data }) => {
            setPlaces(data)
            setLoading(false)

        })
    }, [])

    return (
        <div className='mx-4'>
            <AccountNav />
            {loading ? <Loading /> : <></>
            }
            <div className='text-center cursor-pointer'>
                <Link className="bg-primary text-white py-2 px-6 rounded-full inline-flex " to={'/account/places/new'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                    Add new place </Link>
            </div>
            <div className='my-4 '>
                {places.length > 0 && places.map((place, index) => (
                    <Link key={index} to={"/account/places/" + place._id} className='flex cursor-pointer bg-gray-100 gap-4 p-4 rounded-2xl my-2'>
                        <div className='flex h-32 w-32 bg-gray-300 grow shrink-0 rounded-full'>
                            <PlaceImg place={place} />
                        </div>
                        <div className='grow-0 shrink'>
                            <h2 className='text-xl'>{place.title}</h2>
                            <p className='text-sm mt-2 '>{place.description}</p>

                        </div>
                    </Link>
                ))}
            </div>


        </div>

    )
}

export default PlacesPage
