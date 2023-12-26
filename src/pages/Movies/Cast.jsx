import React from 'react';
import styles from './MoviesDetails.module.css';

const Cast = ({ showCast, cast }) => {
  return (
    showCast &&
    cast.length > 0 && (
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
    )
  );
};

export default Cast;
