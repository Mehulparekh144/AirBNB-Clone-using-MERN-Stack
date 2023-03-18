import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const registerUser = async(e) =>{
      e.preventDefault()
      try {
        await axios.post('/register', {
          name , email , password
        })
        alert("Registered Successfully !")
        
      } catch (error) {
        alert("Registration Failed ! Try again later ")
        
      }
      

    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <button type="submit" className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member !{" "}
                        <Link
                            to="/login"
                            className="underline text-black font-medium"
                        >
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
