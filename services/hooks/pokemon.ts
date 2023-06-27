import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPersonage } from "../item";
import { setToCatchPokemon } from "../../store/slices/slicePokemon";

type FetchState = 'idle' | 'loading' | 'success'

const generateRandom = (min: number, max: number) => {
  return Math.floor(min + Math.random()*(max - min + 1))
}

export const usePokemon = () => {
  const dispatch = useDispatch()
  const [fetchState, setFetchState] = useState<FetchState>('idle')

  const fetchPokemon = useCallback(() => {
    setFetchState('loading')
    const randomId = generateRandom(1, 807)
    const getPokemon = async () => {
      const data = await getPersonage(randomId)
      dispatch(setToCatchPokemon(data))
      setFetchState('success')
    }
    getPokemon()
  }, [])

  return {fetchState, fetchPokemon}
}