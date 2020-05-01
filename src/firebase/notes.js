import { fireStore } from "./init";

const notesCollection = fireStore.collection('notes')

export const addNoteToFireStore = async (note) => {
  await notesCollection.add(note)
}

export function fetchUserNotesFromFirestore(userId) {
  return notesCollection
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
}
