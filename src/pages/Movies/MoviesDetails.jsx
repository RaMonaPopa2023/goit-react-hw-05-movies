import React, { useEffect, useState, startTransition } from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import MovieDetailsService from '../../service/MovieDetailsService';
import styles from './MoviesDetails.module.css';
import CastService from '../../service/CastService';
import ReviewsService from '../../service/ReviewsService';
import Cast from './Cast';
import Reviews from './Reviews';

function MoviesDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [cast, setCast] = useState([]);
  const [showReviews, setShowReviews] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const responseDetails = await MovieDetailsService.retrieveMovieDetails(
          id
        );
        setMovieDetails(responseDetails);

        const responseCast = await CastService.retrieveCast(id);
        setCast(responseCast.cast || []);

        const responseReviews = await ReviewsService.retrieveReviews(id);
        setReviews(responseReviews.results || []);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  const handleToggleCast = () => {
    setShowCast(prevShowCast => !prevShowCast);
  };

  const handleToggleReviews = () => {
    setShowReviews(prevShowReviews => !prevShowReviews);
  };

  return (
    <div className={styles.body}>
      {movieDetails && (
        <>
          <Link to="/" className={styles.goBackButton}>
            Go Back
          </Link>
          <div className={styles.details}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <div className={styles.text}>
              <h1>{movieDetails.title}</h1>
              <p>User Score: {movieDetails.vote_average}</p>
              <h2>
                Overview: <br />
              </h2>
              <p>{movieDetails.overview}</p>
              <h2>
                Genres:
                <br />
              </h2>
              <p>
                Genres: <br />
                {movieDetails.genres
                  ? movieDetails.genres.map(genre => genre.name).join(', ')
                  : 'No genres available'}
              </p>
            </div>
          </div>
          <div className={styles.info}>
            <p>
              Additional Information:
              <br />
              <Link to={`/movies/${id}/cast`} onClick={handleToggleCast}>
                Cast
              </Link>
              <br />
              <Link to={`/movies/${id}/reviews`} onClick={handleToggleReviews}>
                Reviews
              </Link>
            </p>
            <Routes>
              <Route
                path="cast"
                element={<Cast showCast={showCast} cast={cast} />}
              />
              <Route
                path="reviews"
                element={
                  <Reviews showReviews={showReviews} reviews={reviews} />
                }
              />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default MoviesDetails;
