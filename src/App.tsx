import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './config/theme/defaultTheme';
import { MainRouter } from './routes/AppRouter';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <MainRouter />
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
