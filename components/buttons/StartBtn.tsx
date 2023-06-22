import styled from "styled-components"

const StartBtn = styled.button`
  min-width: 128px;
  height: 56px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.action};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 12px 30px rgb(11 129 56 / 60%);
  border: 0;
  border-radius: 50px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .5s ease-out;
  &:hover, &:active, &:focus {
    background-color: ${({ theme }) => theme.colors.actionDark};
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 84px;
    font-size: 28px;
  }
`

export default StartBtn