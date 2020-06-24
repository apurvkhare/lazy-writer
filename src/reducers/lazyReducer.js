import {SET_PARA, SET_TYPED_ERRORS, SET_WPM} from '../actions/types'

const initialState = {
    paragraph: "",
    timer: 60,
    typedErrors: 0,
    wordsPerMinute: 0
}

export const lazyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PARA:
            return{
                ...state,
                paragraph: action.payload
            }
        case SET_TYPED_ERRORS:
            return{
                ...state,
                typedErrors: action.payload
            }
        case SET_WPM:
            return{
                ...state,
                wordsPerMinute: action.payload
            }
        default:
            return state;

    }
}

