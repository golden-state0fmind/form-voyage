import { configureStore } from '@reduxjs/toolkit'
import userReducer from './formSlice'
import stepReducer from './stepSlice'

export const store = configureStore({
    reducer: {
        userObject: userReducer,
        stepTracker: stepReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type
export type AppDispatch = typeof store.dispatch
