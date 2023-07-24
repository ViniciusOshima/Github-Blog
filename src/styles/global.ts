import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};

    -webkit-font-smoothing: antialiased;
  }

  body, input-security, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }
`
