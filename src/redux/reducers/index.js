import { combineReducers } from "redux";
import currentUser from "./users";
import notes from './notes'

const reducer = combineReducers({notes, currentUser})

export default reducer;