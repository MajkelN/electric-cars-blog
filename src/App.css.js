import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html {
      font-size: 10px;
    }

   body {
      min-height: 100vh;
      // overflow: hidden;
      font-family: "Source Code Pro", monospace;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    code {
      font-family: "Source Code Pro", monospace;
    } */
    
   a {
      text-decoration: none;
      outline: none;
      cursor: pointer;
   }
`

export default GlobalStyle