// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
// import search from './search';
// import favorites from './favorites';


// const reducer = combineReducers({ search, favorites });
// const logger = createLogger();
// const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

// export default store;

// export * from './search';
// export * from './favorites';


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import search from './search';
import favorites from './favorites';


const reducer = combineReducers({ search, favorites });

const middleware = composeWithDevTools(applyMiddleware(
	thunkMiddleware,
	createLogger({ collapsed: true })
))

const store = createStore(reducer, middleware);

export default store;

export * from './search';
export * from './favorites';