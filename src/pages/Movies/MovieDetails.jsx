import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieDetailsService from '../../service/MovieDetailsService';
import styles from './MoviesDetails.module.css';
import CastService from '../../service/CastService';
import ReviewsService from '../../service/ReviewsService';

function MoviesDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [showCast, setShowCast] = useState(false); // Update to boolean for toggling
  const [cast, setCast] = useState([]); // Update to always be an array
  const [showReviews, setShowReviews] = useState(false);
  const [reviews, setReviews] = useState([]); // Update to always be an array

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await MovieDetailsService.retrieveMovieDetails(id);
        setMovieDetails(response);
        const responseCast = await CastService.retrieveCast(id);
        setCast(responseCast.cast || []);
        const responseReviews = await ReviewsService.retrieveReviews(id);
        console.log(responseReviews);
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
                {' '}
                {movieDetails.genres.map(genre => genre.name).join(', ')}
              </p>{' '}
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
            {showCast && cast.length > 0 && (
              <div className={styles.cast}>
                <ul>
                  {cast.map(actor => (
                    <li className={styles.list} key={actor.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                        alt={actor.name}
                      />
                      <p>{actor.name} </p>
                      <p>Character: {actor.character}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {showReviews && reviews.length > 0 && (
              <div className={styles.review}>
                <ul>
                  {reviews.map(review => (
                    <li className={styles.list} key={review.id}>
                      <p>{review.author} </p>
                      <p>{review.content}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default MoviesDetails;
