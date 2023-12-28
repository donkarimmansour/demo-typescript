import { combineReducers, configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'
import rootReducer from "@/client/state/features/rootReducer"
import { persistStore } from "redux-persist"
import { userApi } from "@/client/services/rtl/userApi"
import rootSaga from "@/client/state/features/rootSaga"
import { setupListeners } from "@reduxjs/toolkit/query"


// const isServer = typeof window === "undefined"
const isDev = process.env.NODE_ENV !== "production"

const initialState = {}

const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware).concat(userApi.middleware),
  preloadedState: initialState,
  devTools: isDev
})

 sagaMiddleware.run(rootSaga)

 setupListeners(store.dispatch)

  
export const persistor = persistStore(store);
export default store 

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
