import axios from 'axios';

async function getMovies(queryValue: string) {
  try {
    const response = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?query_term=${queryValue}`
    );
    const data = response.data.data.movies;
    console.log('data :>> ', data);
    return data;
  } catch (error) {
    console.error('Ошибка:', error);
    return error;
  }
}

export default getMovies;
