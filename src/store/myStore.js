import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers/index.js";
import myLogger from "./middleware/myLogger.js";

export const store = createStore(reducers, applyMiddleware(myLogger));
