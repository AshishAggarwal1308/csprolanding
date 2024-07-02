import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './style.css';
export default function Page() {
    return (

        <Box 
            className='form-box'
            component="form"
            noValidate
            autoComplete="off"
        >
            <div className='formhead'>
                <h1>Get In <span style={{ color: '#AE1D3C' }}>Touch</span></h1>
                <p>
                To discuss a potential partnership, our team is here to assist you.
                </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' ,gap:'24px'}}>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    placeholder="Name"
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="E-mail"
                    placeholder="Email"
                />

                <TextField
                    id="outlined-number"
                    label="Contact"
                    type="tel"
                    placeholder='00000 00000'
                />

                <button className='formbtn'>Submit</button>
        </div>
        </Box >
    );
}
