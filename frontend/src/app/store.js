import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'

export const store = configureStore({

  // Maps different parts of the state to their respective reducers
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
});
