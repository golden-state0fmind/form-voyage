import { configureStore } from '@reduxjs/toolkit'
import userReducer from './formSlice'
import stepReducer from './stepSlice'
import selectPlanReducer from './planSlice'

export const store = configureStore({
    reducer: {
        userObject: userReducer,
        stepTracker: stepReducer,
        trackPlan: selectPlanReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type
export type AppDispatch = typeof store.dispatch
