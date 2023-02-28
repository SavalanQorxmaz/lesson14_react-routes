

import React from 'react'
import { TextField, Button } from '@mui/material'

const Register = () => {
  return (
    <div className='register-page'>
        <div className='container'>
        <div className='register'>
       
            <div className='form'>
            <h1>Register Page</h1>
            
  <TextField variant="outlined" label="Username" />
  <TextField variant="outlined" label="Email" type="email" />
  <TextField variant="outlined" label="Password" type="password" />
  <Button variant="contained">Contained</Button>

            </div>
        </div>
        </div>
    </div>
  )
}


export {Register}