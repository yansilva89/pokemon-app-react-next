import styled from "styled-components"

interface Props {
  bgColor?: string
}

const TypeBtn = styled.button<Props>`
  width: 100px;
  height: 32px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${(props) => props.bgColor};
  color: #fff;
  border: 0;
  border-radius: 50px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  transition: background-color .5s ease-out;
  @media (max-width: 500px) {
    width: 100%;
    height: 84px;
    font-size: 28px;
  }
`

export default TypeBtn