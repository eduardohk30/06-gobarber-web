import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

import Routes from './routes';

/*
 * O componente provider deve ser colocada por volta dos componentes
 * que queremos que tenham acesso às informações do context API
 * ao colocarmos ele por volta do componente SignIn por exemplo, todos
 * os componentes filhos do SignIn também poderão acessar o context API
 * o AutContext.Provider exige que coloquemos um valor, já que
 * informamos isso na interface na declaração da função AuthContext
 * que nós criamos em content/AutContext.ts
 */

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
