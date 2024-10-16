import React, { useEffect, useState } from 'react';
import { register } from '../api';
import { Box, Container, TextField, Typography, Button, CircularProgress } from '@mui/material';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      if (!isLoading) {
        setIsLoading(true);
      }
      const response = await register(formData);
      console.log(JSON.parse(JSON.stringify(response)));
      if(response.data.success == true) {
        alert('User registered successfully');
      }
    } catch (error) {
      console.error(error);
      alert('Error registering user');
    } finally {
      setIsLoading(false);
      setFormData({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      })
    }
  };

  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="firstName"
            autoFocus
            onChange={handleInputChange}
            value={formData.firstName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastName"
            autoFocus
            onChange={handleInputChange}
            value={formData.lastName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInputChange}
            value={formData.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputChange}
            value={formData.password}
          />
          <Button variant="contained" onClick={handleRegister}>
            {isLoading ? <CircularProgress /> : 'Register'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
