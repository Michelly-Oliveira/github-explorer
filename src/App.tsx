import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Theme from './components/Theme';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <Theme>
    <GlobalStyles />

    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Theme>
);
export default App;
