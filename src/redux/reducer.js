import { combineReducers } from "redux";
import { CREATE_NOTE } from "./actionTypes";

function notes(state = [], action) {
    console.log(action)
    switch(action.type) {
        case CREATE_NOTE: {
            return [
                ...state,
                action.payload
            ]
        }
        default: return state
    }
}

const reducer = combineReducers({notes})

export default reducer;