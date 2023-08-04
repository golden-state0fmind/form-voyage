import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface PlanState {
    value: {
        name: string
        price: number
        addOns: [
            { name: string, price: number, description: string, selected: false },
            { name: string, price: number, description: string, selected: false },
            { name: string, price: number, description: string, selected: false }
        ]
        monthlyBill: boolean
    }
}

// Define the initial state using that type
export const initialState: PlanState = {
    value: {
        name: 'Arcade',
        price: 0,
        addOns: [
            { name: 'Online Service', price: 1, description: 'Access to multiplayer games.', selected: false },
            { name: 'Larger storage', price: 2, description: 'Extra 1TB of cloud storage.', selected: false },
            { name: 'Customizable profile', price: 2, description: 'Custom theme on your profile.', selected: false }
        ],
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