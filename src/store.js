import { createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/lazyReducer";

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools()
);

export default store;
