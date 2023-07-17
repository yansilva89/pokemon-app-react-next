import styled from "styled-components"
import { QuestionIcon } from "../svg/Question"

const AvatarVoidStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.primaryDark};
  border-radius: 50%;
  cursor: pointer;
`

export default function AvatarVoid() {
  return (
    <AvatarVoidStyle>
      <QuestionIcon />
    </AvatarVoidStyle>
  )
}