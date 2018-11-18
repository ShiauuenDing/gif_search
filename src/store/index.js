import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import search from './search';
import favorites from './favorites';


const reducer = combineReducers({ search, favorites });
const logger = createLogger();
const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

export default store;

export * from './search';
export * from './favorites';