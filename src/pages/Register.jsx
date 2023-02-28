

import React, {useState} from 'react'
import { TextField, Button } from '@mui/material'

import {UserDb} from "../databases/UserDb"

const Register = () => {

const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: 'ffff'
})

const getUserData = (e)=> {

    
     Object.keys(userData).forEach((item)=>{
        if(e.target.getAttribute("name") == userData[item]){
     setUserData(userData["name"] = e.target.value)
 }
 console.log(userData.name, e.target.getAttribute("name") )
})     
        
console.log(userData['password'])
  
}

    const registerFunc = ()=> {

        const user = {
            id:  Date.now(),
            name: "",
            email: "",
            password: ""
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
  <Button variant="contained">Sign Up</Button>

            </div>
        </div>
        </div>
    </div>
  )
}


export {Register}