
import { legacy_createStore as createStore, combineReducers} from "redux"
import { counterReducer } from "./counterReduser"
import { todoReducer } from "./todoReduser"

// ! storu olusturduk

// export const store = createStore (counterReducer)

const rootReducer = combineReducers({

 count : counterReducer,
 todo: todoReducer,


})

export const store = createStore(rootReducer)