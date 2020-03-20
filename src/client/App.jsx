import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import ThemeDefault from './records/Theme';
import Root from './scenes/Root';
import rootReducer from './reducers';

// init store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
    process.env.NODE_ENV === 'development' ? applyMiddleware(logger) : undefined,
  ),
);

// global css
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Baloo 2', cursive;
  }
`;

const container = document.getElementById('container');

if (container) {
  render(
    <Provider store={store}>
      <ThemeProvider theme={ThemeDefault}>
        <>
          <Normalize />
          <GlobalStyle />
          <Root />
        </>
      </ThemeProvider>
    </Provider>,
    container,
  );
}
