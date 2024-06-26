import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('http://localhost:4000/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });
        const data = await response.json();
        if (response.ok) {
          // Login successful
          console.log(data.message); // "Login successful"
          navigate('/home', { state: { username: data.username } }); // navigate to the dashboard or appropriate route after login
        } else {
          // Handle failed login
          console.error(data.message); // "Invalid credentials"
          // Display an error message on the form here
        }
      } catch (error) {
        console.error('Login error:', error);
        // Display a network error on the form here
      }

  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Container 
            component="main"
            maxWidth="xs"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
        <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, borderRadius: '16px' }}>
            <div style={{fontSize: '30px', padding: '16px'}}>Sign In</div>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={credentials.username}
                    onChange={handleChange}
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
                    value={credentials.password}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                {/* <div style={{display: 'flex' }}>
                    <span>Don't have an account?</span>
                    <a style={{marginLeft: 'auto'}}>Sign Up</a>
                </div> */}
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                    Don't have an account? 
                    <a href="/signup" style={{ marginLeft: '5px', cursor: 'pointer', textDecoration: 'none', color: '#007bff' }}>
                        Sign Up
                    </a>
                </Typography>
            </Box>
        </Paper>
        </Container>
    </div>
  );
};

export default LoginPage;
