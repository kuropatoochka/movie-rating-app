import {createStore} from "redux";
import filmReducer from "./reducer";

const store = createStore(filmReducer)

export default store