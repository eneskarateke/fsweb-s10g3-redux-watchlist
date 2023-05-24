import { movies } from "../../movies.js";

const initialState = {
  movies: movies,
};
console.log(initialState);

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default movieReducer;
