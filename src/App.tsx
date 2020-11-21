import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import AppProvider from './hooks/index';

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
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
