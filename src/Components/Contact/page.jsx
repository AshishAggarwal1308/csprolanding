import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Page() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const { name, email, phone } = formData;
        if (!name || !email || !phone) {
            toast.error("All fields are required");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email format");
            return false;
        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            toast.error("Phone number must be 10 digits");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        try {
            const response = await axios.post('http://13.232.216.219:8000/api/v1/register', {
                FullName: formData.name,
                Email: formData.email,
                Phone: formData.phone
            });


            if (response.status === 201) {
                toast.success('User registered successfully');
                navigate('/thank-you'); 
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Registration failed";
            toast.error(errorMessage);
        }
    };

    return (
        <Box 
            className='form-box'
            component="form"
            noValidate
            autoComplete="off"
        >
            <ToastContainer />
            <div className='formhead'>
                <h1>Get In <span style={{ color: '#AE1D3C' }}>Touch</span></h1>
                <p>
                    To discuss a potential partnership, our team is here to assist you.
                </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outlined-email-input"
                    label="E-mail"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    id="outlined-number"
                    label="Contact"
                    name="phone"
                    type="tel"
                    placeholder='00000 00000'
                    value={formData.phone}
                    onChange={handleChange}
                />
                
                <Button onClick={handleSubmit} type="submit" variant="contained" className='formbtn' style={{ backgroundColor:'#AE1D3C'}}>
                Submit</Button>
            </div>
        </Box >
    );
}
