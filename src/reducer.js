import { movies } from "./movies";
import {
  SONRAKI_FILM,
  ONCEKI_FILM,
  LISTEYE_EKLE,
  LISTEDEN_CIKAR,
} from "./actions";

const initialState = {
  movies: movies,
  sira: 0,
  favMovies: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SONRAKI_FILM:
      return { ...state, sira: state.sira + 1 };
    case ONCEKI_FILM:
      return { ...state, sira: state.sira - 1 };
    case LISTEYE_EKLE:
      return {
        ...state,
        favMovies: [...state.favMovies, state.movies[state.sira]],
        movies: state.movies.filter(
          (movie) => movie.id !== state.movies[state.sira].id
        ),
        sira:
          state.movies.length - state.sira === 1
            ? state.sira === 0
              ? 0
              : state.sira - 1
            : state.sira,
      };
    case LISTEDEN_CIKAR:
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id !== action.payload
        ),
        movies: [
          ...state.movies,
          state.favMovies.find((movie) => movie.id === action.payload),
        ],
      };

    default:
      return state;
  }
}
