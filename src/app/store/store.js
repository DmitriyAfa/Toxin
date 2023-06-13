import { configureStore } from "@reduxjs/toolkit";
import { amenitiesReducer } from "@/features/amenities-dropdown/amenities-dropdown";

const store = configureStore({
  reducer: {
    amenities: amenitiesReducer,
  },
})

export { store };