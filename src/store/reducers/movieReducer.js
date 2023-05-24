import { ADD_FAVORITE } from "../actions/favActions.js";

import { movies } from "../../movies.js";

const initialState = {
  movies: movies,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const updatedMovies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
      return {
        ...state,
        movies: updatedMovies,
      };
    default:
      return state;
  }
};

export default movieReducer;
