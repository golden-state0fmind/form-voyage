import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface PlanState {
    value: {
        name: string
        price: number
        addOns: Array<object>
        monthlyBill: boolean
    }
}

// Define the initial state using that type
const initialState: PlanState = {
    value: {
        name: 'Arcade',
        price: 0,
        addOns: [{}],
        monthlyBill: true
    }
}

export const planSlice = createSlice({
    name: 'trackPlan',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setPlan: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const { setPlan } = planSlice.actions

export default planSlice.reducer