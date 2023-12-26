import axios from 'axios';

async function retrieveMovies() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=073df7c405a58c080f40e96a0065a397'
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching cast details:', error);
    throw error;
  }
}

const HomePageService = {
  retrieveMovies: async () => {
    try {
      const response = await retrieveMovies();
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default HomePageService;
