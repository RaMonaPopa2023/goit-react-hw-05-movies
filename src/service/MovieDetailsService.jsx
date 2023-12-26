import axios from 'axios';
const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzNkZjdjNDA1YTU4YzA4MGY0MGU5NmEwMDY1YTM5NyIsInN1YiI6IjY1NzYyNjEzZTkzZTk1MjE4ZWFhNjA3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iIyV6nknYR1dUjNf59nPjRBMV9nL9cIXwq2ilVmphQA';
async function retrieveMovieDetails(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
}
// async function retrieveMovieDetails(movieId) {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/${movieId}?api_key=073df7c405a58c080f40e96a0065a397`
//     );
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching cast details:', error);
//     throw error;
//   }
// }

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
