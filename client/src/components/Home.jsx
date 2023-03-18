import axios from 'axios'
import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Index = () => {
  const [places, setPlaces] = useState("")
  const [loading , setLoading] = useState(true) 

  useEffect(() => {
    axios.get('/places').then(response => {
      setPlaces(response.data)
      setLoading(false)
    })
  }, [])
  return (
    <div>
        {loading ? <Loading /> : <></>
  }

    <div className='grid gap-8 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mt-8'>
      {places.length > 0 && places.map((place, index) => (
        <Link to={"/places/" + place._id} key={index}>
        <div className='bg-gray-200 mb-4 rounded-2xl flex '>
          {place.photos?.[0] && (
            <img className="rounded-2xl object-cover aspect-square" src={place.photos[0]} alt="" />
          )}
        </div>
        <h2 className="font-bold">{place.address}</h2>
        <h3 className='text-sm truncate text-gray-500'>{place.title}</h3>
        <div className='mt-1'>
          <span className='font-bold'>₹{place.price}</span> per night
        </div>

        </Link>
      ))}


    </div>
    </div>
  )
}

export default Index
