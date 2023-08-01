import { createSlice } from '@reduxjs/toolkit'

export interface userProps {
    name: string,
    email: string,
    phone: string
}

// Define a type for the slice state
export interface FormState {
    value: userProps
}

// Define the initial state using that type
const initialState: FormState = {
    value: {
        name: '',
        email: '',
        phone: ''
    }
}

export const formSlice = createSlice({
    name: 'userObject',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const { setUser } = formSlice.actions

export default formSlice.reducer