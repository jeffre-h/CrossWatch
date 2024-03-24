import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  
  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('http://localhost:4000/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });
        const data = await response.json();
        if (response.ok) {
          // Registration was successful
          console.log(data.message); // "User registered successfully"
          navigate('/login'); // Redirect to login page or any other page
        } else {
          // Handle errors, e.g., username taken
          console.error(data.message); // "Username already taken" or other error messages
        }
      } catch (error) {
        console.error('Failed to submit:', error);
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
            <div style={{fontSize: '30px', padding: '16px'}}>Sign Up</div>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                autoComplete="new-password"
                value={credentials.password}
                onChange={handleChange}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
            </Box>
        </Paper>
        </Container>
    </div>
  );
};

export default SignupPage;