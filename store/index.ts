import { configureStore } from "@reduxjs/toolkit"
import pokeReducer from './slices/slicePokemon'

export const store = configureStore({
  reducer: {
    // Add Reducers
    pokeState: pokeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch