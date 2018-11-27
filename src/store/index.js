import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import search from './search';
import favorites from './favorites';

const reducer = combineReducers({ search, favorites });
const logger = createLogger();

let initState = {};
const persistedState = localStorage.getItem('reduxState');
if (persistedState) {
  initState = JSON.parse(persistedState);
}

const store = createStore(reducer, initState, applyMiddleware(thunk, logger));
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

export default store;

export * from './search';
export * from './favorites';