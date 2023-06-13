import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  bedroom: 0,
  bed: 0,
  bathroom: 0,
}

export const amenitiesSlice = createSlice({
  name: 'amenities',
  initialState,
  reducers: {
    incrementBedroom: (state) => {
      state.bedroom += 1
    },
    decrementBedroom: (state) => {
      if (state.bedroom > 0) {
        state.bedroom -= 1
      }
    },
    incrementBed: (state) => {
      state.bed += 1
    },
    decrementBed: (state) => {
      if (state.bed > 0) {
        state.bed -= 1
      }
    },
    incrementBathroom: (state) => {
      state.bathroom += 1
    },
    decrementBathroom: (state) => {
      if (state.bathroom > 0) {
        state.bathroom -= 1
      }
    },
  },
})

const {
  incrementBedroom,
  decrementBedroom,
  incrementBed,
  decrementBed,
  incrementBathroom,
  decrementBathroom,
} = amenitiesSlice.actions

export {
  incrementBedroom,
  decrementBedroom,
  incrementBed,
  decrementBed,
  incrementBathroom,
  decrementBathroom,
}
export default amenitiesSlice.reducer;