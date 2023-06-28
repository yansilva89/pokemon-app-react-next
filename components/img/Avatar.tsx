import styled from "styled-components"
import Image from 'next/image'

const AvatarStyle = styled.div`
  position: absolute;
  top: -100px;
  background-color: #F7F9FC;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`

export default function Avatar({ avatarImg }) {
  return (
    <AvatarStyle>
      <Image src={avatarImg} alt="" width={160} height={160} />
    </AvatarStyle>
  )
}