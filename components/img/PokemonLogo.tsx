import styled from "styled-components"
import Image from 'next/image'

const Logo = styled.div`
  margin-bottom: 2rem;
`

export default function PokemonLogo() {
  return (
    <Logo>
      <Image src="/images/logo.png" alt="Pokemon" width={270} height={99} />
    </Logo>
  )
}