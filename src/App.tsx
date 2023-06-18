import React from 'react';
import { Provider } from 'react-redux';
import { MainRouter } from './routes/router';
import { store } from './store';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './config/theme/defaultTheme';

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
