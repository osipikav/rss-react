import axios from 'axios';

async function getMovies(queryValue: string) {
  try {
    const response = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?query_term=${queryValue}`
    );
    const data = response.data.data.movies;
    return data !== 'undefined' ? data : [];
  } catch (error) {
    console.error('Ошибка:', error);
    return [];
  }
}

export default getMovies;
