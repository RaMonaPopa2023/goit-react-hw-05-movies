import axios from 'axios';

// const API_KEY =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzNkZjdjNDA1YTU4YzA4MGY0MGU5NmEwMDY1YTM5NyIsInN1YiI6IjY1NzYyNjEzZTkzZTk1MjE4ZWFhNjA3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iIyV6nknYR1dUjNf59nPjRBMV9nL9cIXwq2ilVmphQA';

// async function searchMovies(query) {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${API_KEY}`,
//     },
//   };

//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/search/movie?query=${query}`,
//       options
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching movies:', error);
//     throw error;
//   }
// }

async function searchMovies(query) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching cast details:', error);
    throw error;
  }
}

const MovieService = {
  searchMovies: async query => {
    try {
      const response = await searchMovies(query);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default MovieService;
