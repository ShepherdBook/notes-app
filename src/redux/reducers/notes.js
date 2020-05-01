import { CREATE_NOTE, FETCH_USER_NOTES } from "../actions/actionTypes"

function notesReducer(state = [], { type, payload }) {
    switch(type) {
        case FETCH_USER_NOTES: {
            const notes = payload
            return notes
        }
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