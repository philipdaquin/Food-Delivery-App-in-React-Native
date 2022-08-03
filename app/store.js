import { configureStore } from '@reduxjs/toolkit'
import {  basketSlice} from './features/backet_slice'
import restaurant_slice from './features/restaurant_slice'

export const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
    restaurant: restaurantSlice.reducer
  },
})