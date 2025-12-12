import React from 'react'
import {useState} from 'react'

export default function RegistrationForm() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors,setErrors] = useState({});

    const handleSubmit = (e) => { 
        e.preventDefault();

        const newErrors= {}

        if (!username.trim()) {
            newErrors.username = "invalid username";
        }

        if (!email.trim()) {
            newErrors.email = "invalid email";
        }

        if (password.length < 6) {
            newErrors.password = "password must be at least 6 characters";
        }
    }


  return (
    <div>
        <form action="">
            <div>
                <label>User Name:</label>
                <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter your username:' />
            </div>

            <hr />
            <div>
                <label>Email:</label>
                <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email:' />
            </div>

            <hr />
            <div>
                <label>Password:</label>
                <input 
                type="password"
                value={password}
                onChange={(e) =>setPassword(e.target.value)} />
            </div>
        </form>
      
    </div>
  )
}
