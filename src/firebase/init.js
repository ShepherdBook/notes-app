import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import config from './config'

const firebaseInstance = firebase.initializeApp(config)

export const fireAuth = firebaseInstance.auth()
export const fireStore = firebaseInstance.firestore()