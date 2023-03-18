import React, { useContext, useEffect, useState } from 'react'
import { differenceInCalendarDays } from 'date-fns'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../userContext'

const BookingWidget = ({ place }) => {
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [guests, setGuests] = useState(1)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [redirect, setRedirect] = useState("")
    const user = useContext(UserContext)
    const [logged, setLogged] = useState(true)

    useEffect(() => {
        if (user) {
            if (user.user) {
                setName(user.user.name);
            }
            else {
                setLogged(false)
            }
        }
    }, [])

    let numberOfNights = 0
    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
    }

    async function bookThisPlace() {
        const data = { checkIn, checkOut, name, phone, place: place._id, price: numberOfNights * place.price, guests }
        const response = await axios.post('/bookings', data)
        const bookingId = response.data._id
        setRedirect(`/account/booking/${bookingId}`)
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }


    return (

        <div className='bg-white shadow p-4 rounded-2xl mt-4'>
            <div className="text-2xl text-center my-4">
                Price : ₹{place.price} /per night
            </div>
            <div className='border rounded-2xl mt-4'>
                <div className="flex justify-between align-middle">
                    <div className='py-4 px-4 border-r w-1/2'>
                        <label>Check In : </label>
                        <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
                    </div>
                    <div className='py-4 px-4 '>
                        <label>Check Out : </label>
                        <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
                    </div>
                </div>
                <div className='py-2 px-4 border-t'>
                    <label>Number of guests : </label>
                    <input type="number" value={guests} onChange={e => setGuests(e.target.value)} />
                </div>
                {numberOfNights > 0 && (
                    <>
                        <div className='py-2 px-4 border-t'>
                            <label>Full Name : </label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} />

                            <label>Phone Number : </label>
                            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
                    </>

                )}

            </div>
            {logged &&
                <button className="primary mt-4" onClick={bookThisPlace}>Book this place
                    {numberOfNights > 0 && (
                        <span>
                            &nbsp;₹{numberOfNights * place.price}
                        </span>
                    )}
                </button>
            }
            {!logged &&
                <button className="primary opacity-50 cursor-default mt-4" onClick={bookThisPlace}>Log in for booking
                    {numberOfNights > 0 && (
                        <span>
                            &nbsp;₹{numberOfNights * place.price}
                        </span>
                    )}
                </button>
            }
        </div>





    )
}

export default BookingWidget
