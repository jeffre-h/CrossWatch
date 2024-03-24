import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const CollectionsList = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/movies/popular');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            if (Array.isArray(data) && data.length >= 12) {
                const groups = [];
                for (let i = 0; i < data.length; i += 3) { 
                    groups.push(data.slice(i, i + 3));
                }
                setCollections(groups);
            } else {
                console.error('Data is not an array or does not have 12 items');
            }
        } catch (error) {
            console.error('Failed to retrieve popular movies:', error);
        }
    };

    fetchMovies();
  }, []);

  return (
    <Grid container wrap="nowrap" sx={{ paddingTop: '30px' }}>
      {collections.map((group, groupIndex) => (
        Array.isArray(group) ? (
          <Grid key={groupIndex} item sx={{ marginLeft: groupIndex > 0 ? '-130px' : '0px', zIndex: collections.length - groupIndex }}>
            {group.map((movie, movieIndex) => (
              <>
              <Card key={movie.title} sx={{ width: 250, height: 350, marginBottom: '10px', position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                  </Typography>
                </CardContent>
              </Card>
              <div style={{height: '20px'}}></div>
              </>
            ))}
          </Grid>
        ) : null 
      ))}
    </Grid>
  );
}

export default CollectionsList;
