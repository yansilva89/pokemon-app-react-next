import styled from "styled-components";

const TitleInCss = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid #C5CEE0;
  margin: 2.5rem 0;
  h4 {
    position: absolute;
    top: -12px;
    background-color: #F7F9FC;
    margin: 0;
    padding: 0 12px;
    color: #2E3A59;
    font-weight: 600 !important;
    text-transform: uppercase;
  }
`

export default function TitleIn({ text }) {
  return (
    <TitleInCss>
      <h4>{text}</h4>
    </TitleInCss>
  )
}