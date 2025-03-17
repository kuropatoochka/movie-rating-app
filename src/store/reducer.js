const initialState = {
  movies: []
}

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [
          ...state.movies,
          {id: Date.now(), title: action.payload, rating: 0}
        ]
      }
    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      }
    case "RATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map(movie => movie.id === action.payload.id ? {
          ...movie,
          rating: action.payload.rate
        } : movie)
      }
    case "SORT_MOVIES":
      return {
        ...state,
        movies: [...state.movies].sort((a, b) => a.rating - b.rating)
      }
    default:
      return state
  }
}

export default filmReducer