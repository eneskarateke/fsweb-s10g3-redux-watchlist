import { movies } from "../../movies.js";

const initialState = {
  movies: movies,
};
console.log(initialState);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case generalActions.changeTitle:
    //   return { ...state, title: action.payload };

    // case generalActions.addProductToShoppingCart:
    //   return {
    //     ...state,
    //     shoppingCart: [
    //       ...state.shoppingCart,
    //       {
    //         count: 1,
    //         product: action.payload,
    //       },
    //     ],
    //   };

    default:
      return state;
  }
};
