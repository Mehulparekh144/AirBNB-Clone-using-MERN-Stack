import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Index from './components/Home'
import Layout from './Layout'
import Register from './components/Register'
import axios from 'axios'
import { UserContextProvider } from './userContext'
import Account from './components/Account'
import PlacesPage from './components/PlacesPage'
import PlacesForm from './components/PlacesForm'
import SinglePage from './components/SinglePage'
import Bookings from './components/Bookings'
import SingleBooking from './components/SingleBooking'

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL ;
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/booking" element={<Bookings/>} />
        <Route path="/account/booking/:id" element={<SingleBooking/>} />
        <Route path="/account/:subpage?" element={<Account />} />
        <Route path="/account/places" element={<PlacesPage/>} />
        <Route path="/account/places/new" element={<PlacesForm />} />
        <Route path="/account/places/:id" element={<PlacesForm />} />
        <Route path="/places/:id" element={<SinglePage />} />

      </Route>
    </Routes>

    </UserContextProvider>

  )
}

export default App
