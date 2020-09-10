import { createGlobalStyle, css } from 'styled-components'

export const bodyStyles = css`
  margin: 0;
  background-color: #f3f6f9;
  -webkit-text-size-adjust: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.15;
`

export const GlobalStyle = createGlobalStyle`
  html {
      box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
      box-sizing: inherit;
  }

  body {
    ${bodyStyles}
  }
`
