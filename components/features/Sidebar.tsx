import styled from "styled-components";
import AvatarSide from "./AvatarSide";
import AvatarVoid from "./AvatarVoid";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import AddNewPokemon from "./AddNewPokemon";

const SidebarStyle = styled.div`
  position: absolute;
  top: 2rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
`

export default function Sidebar() {
  const pokemonItensSidebar = useSelector((state: RootState) => state.pokeState.catchPokemons)
  return (
    <SidebarStyle>
      {pokemonItensSidebar.map((item, index) => item.name ? <AvatarSide image={item.image} key={item.id} /> : <AvatarVoid key={index} />)}
      <AddNewPokemon />
    </SidebarStyle>
  )
}