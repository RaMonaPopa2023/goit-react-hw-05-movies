import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieService from '../../service/MovieService';
import styles from './MoviesPage.module.css';

function MoviePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await MovieService.searchMovies(searchTerm);
        setSearchResults(response.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    if (searchTerm) {
      fetchMovies();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviePage;
