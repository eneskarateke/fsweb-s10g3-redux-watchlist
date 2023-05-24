import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favActions.js";

const initialState = {
  favorites: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FAVORITE:
      const updatedFavorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
      return {
        ...state,
        favorites: updatedFavorites,
      };
    default:
      return state;
  }
};

export default favReducer;
