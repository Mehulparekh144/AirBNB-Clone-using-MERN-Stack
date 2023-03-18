import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddressLink from './AddressLink'
import BookingWidget from './BookingWidget'
import PlaceGallery from './PlaceGallery'

const SinglePage = () => {
    const { id } = useParams()
    const [place, setPlace] = useState(null)
    const [showAllPhotos, setShowAllPhotos] = useState(false)

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/places/${id}`).then(response => {
            setPlace(response.data)
        })
    }, [])

    if (!place) return ''

    if (showAllPhotos) {
        return (
            <div className='absolute inset-0 min-w-full min-h-screen'>
                <div className='p-8 grid gap-4 bg-black items-center justify-items-center '>

                    <div className='text-white '>
                        <h2 className='text-2xl text-white'>Photos of {place.title}</h2>
                        <button onClick={() => setShowAllPhotos(false)} className='fixed flex top-8 right-12 gap-2 py-2 px-4 mr-3 bg-primary rounded-full '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>

                        </button>

                    </div>
                    {place?.photos?.length > 0 && place.photos.map((photo, index) => (
                        <div key={index}>
                            <img src={'http://localhost:4000/uploads/' + photo} alt="" />

                        </div>

                    ))}

                </div>
            </div>)
    }

    return (
        <div className='mt-8 bg-gray-100 -mx-8 px-8 pt-6'>
            <h1 className='text-3xl'>{place.title}</h1>
            <AddressLink>
                {place.address}
            </AddressLink>
            <PlaceGallery place={place} />

            <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] mt-8'>
                <div className='pr-8'>
                    <div className='my-4'  >
                        <h2 className='font-semibold text-2xl'>Description</h2>
                        {place.description}
                    </div>
                    <b>Check In : </b> {place.checkIn} <br />
                    <b>Check Out : </b> {place.checkOut} <br />
                    <b>Max Guests : </b> {place.maxGuests}


                </div>
                <div>
                    <BookingWidget place={place} />
                </div>

            </div>
            <div className='bg-white -mx-8 px-8 py-4 mt-4 border-t'>
                <div>
                    <h2 className='font-semibold text-2xl'>Extra Info</h2>
                </div>
                <div className='mb-4 mt-2 text-gray-700 '>
                    {place.extraInfo}
                </div>

            </div>
        </div>
    )
}

export default SinglePage
