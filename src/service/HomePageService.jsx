import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzNkZjdjNDA1YTU4YzA4MGY0MGU5NmEwMDY1YTM5NyIsInN1YiI6IjY1NzYyNjEzZTkzZTk1MjE4ZWFhNjA3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iIyV6nknYR1dUjNf59nPjRBMV9nL9cIXwq2ilVmphQA';

async function retrieveMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}

const HomePageService = {
  retrieveMovies: async () => {
    try {
      const response = await retrieveMovies();
      return response;
    } catch (error) {
      // Handle or log the error here if needed
      throw error; // Propagate the error further if needed
    }
  },
};

export default HomePageService;
