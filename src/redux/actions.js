import { CREATE_NOTE } from './actionTypes'

let nextId = 2

export const createNote = noteValue => ({
    type: CREATE_NOTE,
    payload: {
        id: nextId++,
        value: noteValue
    },
})