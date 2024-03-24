import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Box } from '@mui/material';

const SignupPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(credentials);

    /* 
        TODO: api call to add user to database
        - if username taken -> ask to try again
    */
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