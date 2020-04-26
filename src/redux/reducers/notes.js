import { CREATE_NOTE } from "../actions/actionTypes"

function notesReducer(state = [], { type, payload }) {
    switch(type) {
        case CREATE_NOTE: {
            return [
                ...state,
                payload,
            ]
        }
        default: return state
    }
}

export default notesReducer