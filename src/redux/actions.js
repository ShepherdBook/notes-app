import { SAVE_NOTE } from './actionTypes'

export const saveNote = (note) => ({
    type: SAVE_NOTE,
    payload: note,
})