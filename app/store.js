import { configureStore } from '@reduxjs/toolkit'
import {  basketSlice} from './features/backet_slice'

export const store = configureStore({
  reducer: {
    basket: basketSlice.reducer
  },
})