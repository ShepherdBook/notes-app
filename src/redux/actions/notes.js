import { CREATE_NOTE, FETCH_USER_NOTES } from "./actionTypes"
import { addNoteToFireStore } from "../../firebase/notes";

export const createNote = (title, body, userId) => (
    async dispatch => {
        try {
            const createdAt = Date.now()
            console.log('createNote: ', title, body, userId, createdAt)
            await addNoteToFireStore({title, body, userId, createdAt})
            dispatch({
                type: CREATE_NOTE,
                payload: {
                    title,
                    body,
                    userId,
                    createdAt,
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