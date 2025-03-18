export const setMovies = (movies) => {
  return {
    type: "SET_MOVIES",
    payload: movies
  }
}
export const addMovie = (movieName) => {
  return {
    type: "ADD_MOVIE",
    payload: movieName
  }
}
export const removeMovie = (id) => {
  return {
    type: "REMOVE_MOVIE",
    payload: id
  }
}
export const rateMovie = (id, rate) => {
  return {
    type: "RATE_MOVIE",
    payload: {id, rate}
  }
}
export const searchMovie = (movies) => {
  return {
    type: "SEARCH_MOVIE",
    payload: movies
  }
}