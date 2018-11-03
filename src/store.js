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
			dispatch(putUrls(gifUrls));
		})
}

const putGifUrls = (data) => {
	return data.map(d => d.images.fixed_height.url).map(url => {
			let i = url.indexOf('?');
			return url.slice(0, i);
		});
}

export const dispatchAddFavorite = (fav) => (dispatch) => {
	dispatch(addFavorite(fav));
}


//reducer
function reducer(state = initialState, action) {
	switch(action.type) {
		case PUT_URLS:
			return Object.assign( {}, state, { urls: action.urls } );
		case ADD_FAVORITE:
			return checkDuplicateAndUpdate(state, action.fav);
		default:
			return state;
	}
}

const checkDuplicateAndUpdate = (state, newFav) => {
	if(state.favorites.includes(newFav)) {
		return state;
	} else {
		return Object.assign( {}, state, { favorites: [newFav, ...state.favorites] } );
	}
}


export default createStore(reducer, applyMiddleware(thunkMiddleware, logginMiddleware));