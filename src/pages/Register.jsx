

import React, {useState, useEffect} from 'react'
import { TextField, Button } from '@mui/material'
import {UserDb} from "../databases/UserDb"


const Register = () => {
const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
})

const getUserData = (e)=> { 
    setUserData(prev => ({...prev, [e.target.name]: e.target.value}))
     
 
        

  
}

    const registerFunc = ()=> {
console.log(userData)
        const user = {
            id:  Date.now(),
            name: userData.name,
            email: userData.email,
            password: userData.password
        }

        UserDb.push(user)
        console.log(UserDb)
       

    }

  return (
    <div className='register-page'>
        <div className='container'>
        <div className='register'>
       
            <div className='form'>
            <h1>Register Page</h1>
            
  <TextField onChange={getUserData} variant="outlined" label="Username" name='name' />
  <TextField onChange={getUserData} variant="outlined" label="Email" type="email" name ='email'/>
  <TextField onChange={getUserData} variant="outlined" label="Password" type="password" name='password'/>
  <Button onClick={registerFunc} disabled = {userData.name.length<3 || userData.email.length < 5 ||(userData.password.length < 8)||(userData.password.search(/[a-z]/) < 0)||(userData.password.search(/[A-Z]/)< 0)||(userData.password.search(/[0-9]/) < 0)||(userData.password.search(" ") > -1)} variant="contained">Sign Up</Button>

            </div>
        </div>
        </div>
    </div>
  )
}


export {Register}


