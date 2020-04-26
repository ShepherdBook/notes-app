import { fireStore } from "./init";

const notesCollection = fireStore.collection('notes')

export const addNoteToFireStore = async (noteValue) => {
    await notesCollection.add(noteValue)
}
