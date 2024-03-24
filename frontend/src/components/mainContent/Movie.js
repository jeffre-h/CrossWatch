import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Movie = ({title, imageUrl, year}) => {

  return (
    <Card 
      sx={{ 
        width: 300,  
        height: 600, 
        borderRadius: '20px', 
        margin: 'auto', 
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'space-between'
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/w300${imageUrl}`}
        sx={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
      />
      <CardContent sx={{ padding: '16px' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {year}
          </Typography>
          <Box>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton aria-label="watch later">
              <AccessTimeIcon />
            </IconButton>
            <IconButton aria-label="add to list">
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Movie;
