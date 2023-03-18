import React, { useContext, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { UserContext } from '../userContext'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PlacesPage from './PlacesPage'
import AccountNav from './AccountNav'

const Account = () => {
    const [redirect, setRedirect] = useState(null)
    const { ready, user, setUser } = useContext(UserContext)
    let { subpage } = useParams()
    if (subpage === undefined) {
        subpage = 'profile'
    }


    async function logout() {
        await axios.post('/logout')
        setRedirect('/');
        setUser(null);
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }


    if (!ready) {
        return <Loading />
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }

    


    return (
        <div>
            <AccountNav/>           
            {subpage === 'profile' && (
                <div className='text-center max-w-lg mx-auto'>
                    <h2>Logged in as {user.name} ({user.email})</h2>
                    <button className='text-primary border border-primary py-2 px-4 rounded-xl max-w-sm mt-4' onClick={logout}>Logout</button>
                </div>

            )}
            {subpage === 'places' && (
                <PlacesPage />
            )}

        </div>
    )
}

export default Account
