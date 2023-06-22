import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.white};
    //
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
