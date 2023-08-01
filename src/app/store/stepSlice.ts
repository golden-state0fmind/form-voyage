import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface StepState {
    value: number
}

// Define the initial state using that type
const initialState: StepState = {
    value: 1
}

export const stepSlice = createSlice({
    name: 'stepTracker',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setStep: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const { setStep } = stepSlice.actions

export default stepSlice.reducer