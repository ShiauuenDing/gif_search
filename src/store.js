import { createStore, applyMiddleware } from 'redux';
import logginMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const initialState = {
	urls: []
};


// actions


// action creators



// thunk creators
export const dispatchGifsData = () => {console.log('here is dispatchGifsData')}



//reducer
function reducer(state = initialState, action) {
	console.log(action);
	switch(action.type) {
		default:
			return state;
	}
}


export default createStore(reducer, applyMiddleware(thunkMiddleware, logginMiddleware));