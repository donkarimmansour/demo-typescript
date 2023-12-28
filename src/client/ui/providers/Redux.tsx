"use client"

import store, { persistor } from "@/client/providers/libs/store";
import React, { ReactNode } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react";


function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
               {children}
            </PersistGate>
         </Provider>
}

export default ReduxProvider