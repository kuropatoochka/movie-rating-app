import {searchMovie, setMovies} from "./movieActions";

const APY_KEY = "b353ef8a-de9d-4cad-9f3c-9b6e774e63d7"
const API_URL = "https://kinopoiskapiunofficial.tech/api"

export const fetchTopMovies = (type) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/v2.2/films/collections?type=${type}&page=1`, {
        method: 'GET',
        headers: {
          'X-API-KEY': APY_KEY,
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      dispatch(setMovies(data))
    }
    catch (error) {
      console.error('Error: fetching movies', error)
    }
  }
}

export const fetchSearchMovies = (keywords) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/v2.1/films/search-by-keyword?keyword=${keywords}&page=1`, {
        method: 'GET',
        headers: {
          'X-API-KEY': APY_KEY,
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      dispatch(searchMovie(data))
    }
    catch (error) {
      console.error('Error: fetching movies', error)
    }
  }
}