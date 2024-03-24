import React, { useState, useEffect } from 'react';
import Movie from './Movie';

const MovieList = ({ category }) => {
    const [movies, setMovies] = useState([]);

    const handlePopular = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/movies/popular');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setMovies(data);
        } catch (error) {
            console.error('Failed to retrieve popular movies:', error);
        }
    };

    useEffect(() => {
        if (category === "Popular") {
            handlePopular();
        }
        // Add other conditions for different categories if needed
    }, [category]);

    return (
        <div>
            {category === "Popular"
                ?
                <div style={{ display: 'flex', paddingTop: '30px', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {movies.map((movie, index) => (
                    <div style={{ marginBottom: '20px'}}>
                        <Movie 
                        key={index} 
                        title={movie.title} 
                        imageUrl={movie.poster_path} 
                        year={new Date(movie.release_date).getFullYear()}
                        /> 
                    </div>
                ))}
                </div>
                :
                <div>
                    {category === "For You"
                        ?
                        <div>FOR YOU</div>
                        :
                        <div>ALL
                        </div>
                    }
                </div>

            }
        </div>
      );
}

export default MovieList;
