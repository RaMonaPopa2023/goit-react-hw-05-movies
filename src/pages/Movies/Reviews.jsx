import React from 'react';
import styles from './MoviesDetails.module.css';

const Reviews = ({ showReviews, reviews }) => {
  return (
    showReviews &&
    reviews.length > 0 && (
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
    )
  );
};

export default Reviews;
