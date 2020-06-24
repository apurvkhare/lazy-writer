import { createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {lazyReducer} from "./reducers/lazyReducer";

const initialState = {};

const store = createStore(
  lazyReducer,
  initialState,
  composeWithDevTools()
);

export default store;
