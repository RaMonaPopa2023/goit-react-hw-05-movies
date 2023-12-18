import PropTypes from 'prop-types';
import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchTerm, handleChange, retrieveMovies }) => {
  const handleInputChange = evt => {
    const newSearchTerm = evt.target.value;
    handleChange(newSearchTerm);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    retrieveMovies(searchTerm);
  };

  return (
    <header className={styles.body}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          className={styles.searchTerm}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleInputChange}
          value={searchTerm}
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  retrieveMovies: PropTypes.func.isRequired,
};

export default SearchBar;
