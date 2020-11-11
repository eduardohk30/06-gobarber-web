import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  // Coloque abaixo as cores principais da sua aplicação
  body {
    background: #312e38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  /*
   * Coloque abaixo a fonte padrão da sua aplicação
   * caso for usar a fonte do google fonts, coloque
   * a importação dela em public/index.html logo
   * abaixo da tag <title>
   */
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  /*
   * a font-weight é opcional, só colocamos ela
   * pois foi uma escolha de design da nossa aplicação
   */
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer
  }

`;
