import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFF',
  creme: '#FFF8F2',
  rosa: '#E66767',
  rosaClaro: '#FFEBD9',
  amarela: '#FFB930'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.creme};
    color: ${cores.rosa};
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }
`
