import styled from 'styled-components'

const Container = styled.div`
  background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`

const ContainerIn = styled(Container)`
  background-image: url(/images/bg.png);
  background-size: cover;
`

export { Container, ContainerIn }
