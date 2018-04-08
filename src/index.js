import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';

// Styles
import 'normalize.css';
import 'purecss';

// Config
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './config/store';
import theme from './config/theme';

// In Hourse Components
import App from './App';
import Routes from './routes';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes history={history}>
        <App />
      </Routes>
    </ThemeProvider>
  </Provider>,
  target,
);
registerServiceWorker();
