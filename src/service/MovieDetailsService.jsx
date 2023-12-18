import axios from 'axios';

async function retrieveMovieDetails(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=073df7c405a58c080f40e96a0065a397`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching cast details:', error);
    throw error;
  }
}

const MovieDetailsService = {
  retrieveMovieDetails: async movieId => {
    try {
      const response = await retrieveMovieDetails(movieId);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default MovieDetailsService;
