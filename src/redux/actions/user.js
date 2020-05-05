import { SET_CURRENT_USER } from "./actionTypes";
import { fireAuth } from "../../firebase/init";

export const setCurrentUser = user => (
    async dispatch => {
        try {
            console.log('setCurrentUser: ', user)
            dispatch({
                type: SET_CURRENT_USER,
                payload: {
                    user
                }
            })
        } catch (error) {
            console.error(error)
        }
    }
)

export const signInWithEmailAndPassword = (email, password) => (
    async () => {
        try {
            console.log('signInWithEmailAndPassword', email, password)
            await fireAuth.signInWithEmailAndPassword(email, password)
                .catch(function(error) {
                    console.log(error.code, error.message)
                });
        } catch (error) {
            console.error(error)
        }
    }
)

export const signOut = () => (
    async () => {
        try {
            console.log('signOut')
            await fireAuth.signOut()
                .catch(function(error) {
                    console.error(error)
                });
        } catch (error) {
            console.error(error)
        }
    }
)