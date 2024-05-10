
import { legacy_createStore as createStore, combineReducers} from "redux"
import { counterReducer } from "./counterReduser"
import { todoReducer } from "./todoReduser"
import {composeWithDevTools} from "@redux-devtools/extension"
// ! storu olusturduk

// export const store = createStore (counterReducer)

const rootReducer = combineReducers({

 counter : counterReducer,
 todo: todoReducer,


})

export const store = createStore(rootReducer, composeWithDevTools())