import { CREATE_NOTE, FETCH_USER_NOTES } from "./actionTypes"
import { addNoteToFireStore } from "../../firebase/notes";

export const createNote = (noteValue, userId) => (
    async dispatch => {
        try {
            console.log('createNote: ', noteValue, userId)
            await addNoteToFireStore({value: noteValue, userId})
            dispatch({
                type: CREATE_NOTE,
                payload: {
                    value: noteValue,
                    userId,
                },
            })
        } catch (error) {
            console.error(error)
        }
    }
)

export const fetchUserNotes = notes => (
    async dispatch => {
        try {
            console.log('fetchUserNotes: ', notes)
            dispatch ({
                type: FETCH_USER_NOTES,
                payload: notes
            })
        } catch (error) {
            console.error(error)
        }
    }
)