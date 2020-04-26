import { SET_CURRENT_USER } from "./actionTypes";

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