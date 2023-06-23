import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PokeData {
  id?: number
  image?: string
  name?: string
  hp?: number
  weight?: number
  height?: number
  types?: string[]
  abilities?: string[]
}

interface InitialState {
  toCatchPokemon: PokeData
  catchPokemons: PokeData[]
}

const pokemonSlice: InitialState = {
  toCatchPokemon: {},
  catchPokemons: Array(6).fill(0).map(() => ({}))
}

export const slice = createSlice({
  name: 'StorePokemons',
  initialState: pokemonSlice,
  reducers: {
    setToCatchPokemon: (state, action: PayloadAction<PokeData>) => {
      state.toCatchPokemon = {...action.payload}
    }, 
    catchPokemons: (state, action: PayloadAction<PokeData>) => {
      const updatedItems = [...state.catchPokemons]
      const emptyIndex = updatedItems.findIndex(item => Object.keys(item).length === 0);
      if (emptyIndex !== -1) {
        updatedItems[emptyIndex] = action.payload;
        state.catchPokemons = updatedItems
      }
    }
  }
})

export const { setToCatchPokemon, catchPokemons } = slice.actions
export default slice.reducer