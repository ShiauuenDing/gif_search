import { createStore, applyMiddleware } from 'redux';
import logginMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

const initialState = {
	urls: [],
	favorites: []
};


// actions
const PUT_URLS = 'PUT_URLS';
const ADD_FAVORITE = 'ADD_FAVORITE';


// action creators
const putUrls = (urls) => ({ type: PUT_URLS, urls });
const addFavorite = (fav) => ({ type: ADD_FAVORITE, fav });



// thunk creators
export const dispatchGifSearch = (search) => (dispatch) => {
	axios.get('https://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&limit=5')
		.then(res => res.data.data)
		.then(gifsData => {
			const gifUrls = putGifUrls(gifsData);
			// console.log(gifUrls);
			dispatch(putUrls(gifUrls));
		})
}

const putGifUrls = (data) => {
	let idCounter = 0;
	const urls = data.map(d => d.images.fixed_height.url).map(url => {
			idCounter++;
			let i = url.indexOf('?');
			return {id: idCounter, u: url.slice(0, i)};
		});
	return urls;
}

export const dispatchAddFavorite = (fav) => (dispatch) => {
	dispatch(addFavorite(fav));
}


//reducer
function reducer(state = initialState, action) {
	console.log(action);
	switch(action.type) {
		case PUT_URLS:
			return { urls: action.urls };
		case ADD_FAVORITE:
			return Object.assign( {}, state, state.favorites: action.fav );
		default:
			return state;
	}
}


export default createStore(reducer, applyMiddleware(thunkMiddleware, logginMiddleware));