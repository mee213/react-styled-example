import React from 'react';
import { ThemeProvider } from 'styled-components';
import Page from './components/Page';
import { theme } from './styles/shared';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
};

export default App;
