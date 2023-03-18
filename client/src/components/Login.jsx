import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../userContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false)
  const{setUser} = useContext(UserContext)

  const handleLoginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", {
        email, password
      }
      )
      setUser(response.data)
      // console.log(user);
      alert('Login Succesful')
      setRedirect(true)

    } catch (error) {
      alert(error)


    }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }



  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form className='max-w-md mx-auto ' onSubmit={handleLoginUser} >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='primary' type='submit'>Login</button>
          <div className='text-center py-2 text-gray-500'>
            Don't have account yet ! <Link to='/register' className='underline text-black font-medium'>Register now</Link>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login
