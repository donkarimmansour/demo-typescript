import { userApi } from "@/client/services/rtl/userApi"
import counterReducer, { CounterState } from "./counter/slice"
import { combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"


// type AppState = {
//     counter: CounterState;
//     userApi: any;
// }

// <AppState>

const rootReducer = combineReducers({
    [counterReducer.name]: counterReducer.reducer,
    [userApi.reducerPath]: userApi.reducer,
})                
 

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["counter"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export type AppState = ReturnType<typeof rootReducer>;

export default persistedReducer
