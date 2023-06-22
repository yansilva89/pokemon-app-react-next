import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryDark: string
      primaryTransparent: string
      action: string
      actionDark: string
      white: string
    }
  }
}
