import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './store';
import history from './history';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
