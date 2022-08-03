import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    restaurant: { 
      id: null, 
      img: null, 
      title: null, 
      rating: null, 
      genre: null, 
      address: null, 
      description: null, 
      dishes: null
    }
}

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    set_restaurant: (state, action) => { state.restaurant = action.payload}
  },
})

// Action creators are generated for each case reducer function
export const { set_restaurant } = restaurantSlice.actions

export const select_restaurant = (state) => state.restaurant.restaurant

export default restaurantSlice.reducer 
