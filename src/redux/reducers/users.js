import { SET_CURRENT_USER } from "../actions/actionTypes"

function currentUserReducer(state = {}, { type, payload }) {
    switch(type) {
        case SET_CURRENT_USER: {
            return payload.user
        }
        default: return state
    }
}

export default currentUserReducer