import { RootState } from "@/client/providers/libs/store"
import { createSlice, createSelector, current } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"



// Types
type CounterPayload = {
    title: string
    description: string
}

type CounterAction = {
    type: string
    payload: CounterPayload
}

export type CounterState = {
    value: number
    msg: string | null
}


const initialState: CounterState = {
  value: 0,
  msg: null,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        reset: () => initialState,
        increment: (state: CounterState) => {
            state.value += 1
        },
        decrement: (state: CounterState) => {
            state.value -= 1
        },
        incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
        newAction: (state: CounterState) => {
            state.msg = Math.random().toString()
        }
    }
})


const selectCounter = (state: RootState) => state.counter

export const useCounterSelector = createSelector([selectCounter], (state: CounterState) => state )

export const { increment, incrementByAmount, decrement, decrementByAmount, reset, newAction } = counterSlice.actions


export default counterSlice