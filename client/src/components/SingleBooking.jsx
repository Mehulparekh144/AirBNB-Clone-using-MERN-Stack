import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddressLink from './AddressLink';
import BookingDates from './BookingDates';
import PlaceGallery from './PlaceGallery';


const SingleBooking = () => {
    const {id} = useParams();
    const[booking , setBooking] = useState(null) 

    useEffect(() => {
      if(id){
        axios.get('/bookings').then(response=>{
          const foundBooking = response.data.find(({_id}) => _id === id)

          setBooking(foundBooking)
        })

      }
    }, [])

    if(!booking){
      return '';
    }
    
    return (
    <div className='my-8'>
            <h1 className='text-3xl'>{booking.place.title}</h1>
            <AddressLink >{booking.place.address}</AddressLink>
            <div className='flex gap-2 justify-between items-center bg-gray-200 p-5 mb-4 rounded-2xl'>
              <div>
              <h2 className='text-2xl'>Booking Information</h2>
              <BookingDates booking={booking} />

              </div>
              <div className='bg-primary text-white p-6 rounded-2xl'>
                <div>Total Price</div>
                <div className='text-3xl'>₹{booking.price}</div>
              </div>

            </div>
            <PlaceGallery place={booking.place}/>

    </div>
  )
}

export default SingleBooking
