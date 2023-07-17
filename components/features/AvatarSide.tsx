import styled from "styled-components"
import Image from 'next/image'

const AvatarSideStyle = styled.div`
  background-color: #F7F9FC;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  cursor: pointer;
  img {
    width: 85%;
    height: 85%;
  }
`

export default function AvatarSide({ image }) {
  return (
    <AvatarSideStyle>
      <Image src={image} alt="Bubasaur" width={64} height={64} />
    </AvatarSideStyle>
  )
}