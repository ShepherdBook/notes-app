import { combineReducers } from "redux";
import { SAVE_NOTE } from "./actionTypes";

function notes(state = [], action) {
    switch(action.type) {
        case SAVE_NOTE: {
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