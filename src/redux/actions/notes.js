import { CREATE_NOTE } from "./actionTypes"
import { addNoteToFireStore } from "../../firebase/notes";

export const createNote = noteValue => (
    async dispatch => {
        try {
            console.log('createNote: ', noteValue)
            await addNoteToFireStore({value: noteValue})
            dispatch({
                type: CREATE_NOTE,
                payload: {
                    value: noteValue
                },
            })
        } catch (error) {
            console.error(error)
        }
    }
)