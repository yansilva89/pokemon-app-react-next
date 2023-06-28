import styled from "styled-components"

const ActionBtn = styled.button`
  position: sticky;
  bottom: 28px;
  min-width: 200px;
  height: 56px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.action};
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 50px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  transition: background-color .5s ease-out;
  cursor: pointer;
  &:hover, &:active, &:focus {
    background-color: ${({ theme }) => theme.colors.actionDark};
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 84px;
    font-size: 28px;
  }
`

export default ActionBtn