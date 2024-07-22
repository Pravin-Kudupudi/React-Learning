import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store

// Exporting types of useSelect and useDispatch hooks for typescript, useDispatch in order to correctly dispatch thunks.
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch