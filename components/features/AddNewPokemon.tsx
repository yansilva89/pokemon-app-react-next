import styled from "styled-components"
import { QuestionIcon } from "../svg/Question"
import { AddIcon } from "../svg/Add"

const AddNewPokemonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.action};
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.actionDark};
  border-radius: 50%;
  cursor: pointer;
`

export default function AddNewPokemon() {
  return (
    <AddNewPokemonStyle>
      <AddIcon />
    </AddNewPokemonStyle>
  )
}