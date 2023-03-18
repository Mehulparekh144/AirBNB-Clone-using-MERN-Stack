import React, { useState } from 'react'

const PlaceGallery = ({ place }) => {
    const [showAllPhotos, setShowAllPhotos] = useState(false)


    if (showAllPhotos) {
        return (
            <div className='absolute inset-0 min-w-full min-h-screen'>
                <div className='p-8 grid gap-4 bg-black items-center justify-items-center '>

                    <div className='text-white '>
                        <h2 className='text-l mr-32 md:mr-0 md:text-center md:text-2xl text-white'>Photos of {place.title}</h2>
                        <button onClick={() => setShowAllPhotos(false)} className='fixed flex top-8 right-12 gap-2 py-2 px-4 mr-3 bg-primary rounded-full '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>

                        </button>

                    </div>
                    {place?.photos?.length > 0 && place.photos.map((photo, index) => (
                        <div key={index}>
                            <img src={photo} alt="" />

                        </div>

                    ))}

                </div>
            </div>)
    }

    return (
        <div className='relative'>

            <div className="grid gap-2 grid-cols-[2fr_1fr]">
                <div>
                    {place.photos?.[0] && (
                        <div>
                            <img onClick={() => setShowAllPhotos(true)} className='cursor-pointer aspect-square object-cover rounded-tl-2xl rounded-bl-2xl' src={place.photos?.[0]} />

                        </div>
                    )}
                </div>
                <div className='grid'>
                    {place.photos?.[1] && (
                        <img onClick={() => setShowAllPhotos(true)} className='cursor-pointer aspect-square object-cover rounded-tr-2xl ' src={place.photos?.[1]} />
                    )}
                    <div className='overflow-hidden rounded-br-2xl'>

                        {place.photos?.[2] && (
                            <img onClick={() => setShowAllPhotos(true)} className='cursor-pointer aspect-square object-cover relative top-2 ' src={place.photos?.[2]} />
                        )}
                    </div>
                </div>


            </div>
            {place.photos.length > 3 && (
                <button onClick={() => setShowAllPhotos(true)} className='flex gap-1 absolute bottom-2 right-2 py-2 px-2 bg-white rounded-2xl shadow-md shadow-gray-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    Show More Photos</button>

            )
            }
        </div>
    )
}

export default PlaceGallery
