import styled from "styled-components"
import Avatar from "../img/Avatar"
import { Pokeball } from "../svg/Pokeball"
import TypeBtn from "../tips/Tip"
// import ActionBtn from "../buttons/ActionBtn"
import TitleIn from "./TitleIn"
import { usePokemon } from "../../services/hooks/pokemon"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { catchPokemons } from "../../store/slices/slicePokemon"
import { useEffect } from "react"

const DialogIn = styled.div`
  position: relative;
  background-color: #F7F9FC;
  border-radius: 8px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  padding: 8rem 2rem 2rem;
  h3, p {
    margin: 0;
    color: #2E3A59;
    font-weight: 700;
    text-transform: uppercase;
  }
`

const Details = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
  .box-info {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .5rem 0;
    &:nth-child(2) {
      border-left: 1px solid #C5CEE0;
      border-right: 1px solid #C5CEE0;
    }
    h3 {
      margin: 0;
    }
    p {
      font-size: .8rem;
    }
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 2.5rem;
  .types {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  p {
    font-size: .8rem;
    margin-bottom: 1rem;
  }
`

export default function CatchPokemon({ setOpen }) {
  const dispatch = useDispatch()
  const pokemonData = useSelector((state: RootState) => state.pokeState.toCatchPokemon)

  const catchPokemon = () => {
    dispatch(catchPokemons(pokemonData))
    setOpen(false)
  }

  return (
    <DialogIn>
      <Avatar avatarImg={pokemonData.image} />
      <h3>{pokemonData.name}</h3>
      <Details>
        <div className="box-info">
          <p>hp</p>
          <h3>{pokemonData.hp}</h3>
        </div>
        <div className="box-info">
          <p>altura</p>
          <h3>{pokemonData.height}m</h3>
        </div>
        <div className="box-info">
          <p>peso</p>
          <h3>{pokemonData.weight}kg</h3>
        </div>
      </Details>
      <Info>
        <TitleIn text={'tipos'} />
        <div className="types">
          {pokemonData?.types?.map((type, index) => (
            <TypeBtn key={index} bgColor={index === 0 ? "#67AF32" : "#924990"}>{type}</TypeBtn>
          ))}
        </div>
        <TitleIn text={'habilidades'} />
        <p>
          {pokemonData?.abilities?.map((ability, index, list) => (
            <span key={index}>{ability}{list.length - 1 === index ? '' : ', '}</span>
          ))}
        </p>
      </Info>
      {/* <ActionBtn onClick={() => null}>liberar pokemon</ActionBtn> */}
      <Pokeball onClick={() => catchPokemon()} />
    </DialogIn>
  )
}