import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favActions.js";

const initialState = {
  favorites: [],
};
console.log(initialState);

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default favReducer;
