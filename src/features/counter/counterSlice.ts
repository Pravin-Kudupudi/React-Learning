import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state: any) => {
            // Redux Toolkit's createSlice and createReducer APIs use the a tiny package called Immer that produces a brand new immutable state. 
            // No return statement required.
            state.value += 1 
        },
        decrement: (state: any) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer