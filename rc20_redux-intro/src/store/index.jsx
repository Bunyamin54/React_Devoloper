
import { legacy_createStore as createStore} from "redux"
import { counterReducer } from "./counterReduser"

// ! storu olusturduk

export const store = createStore (counterReducer)