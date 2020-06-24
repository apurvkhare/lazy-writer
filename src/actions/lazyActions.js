import { SET_PARA, SET_TYPED_ERRORS, SET_WPM } from "../actions/types";
import store from '../store'   
import faker from "faker";

export const setParagraph = () => {
  console.log("setParagraph called");
  const paragraph = new Array(10)
    .fill()
    .map((_) => faker.random.word())
    .join(" ");

  store.dispatch({
    type: SET_PARA,
    payload: paragraph,
  });
};

export const setTypedErrors = (typedErrors, dispatch) => {
  store.dispatch({
    type: SET_TYPED_ERRORS,
    payload: typedErrors,
  });
};

export const calcWordsPerMinute = (chars, time, dispatch) => {
  const wordsPerMinute = chars / 5 / (time / 60);

  store.dispatch({
    type: SET_WPM,
    payload: wordsPerMinute,
  });
};
