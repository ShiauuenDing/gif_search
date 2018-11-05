import { createStore, applyMiddleware } from 'redux';
import logginMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';


const initialState = {
	search_term: '',
	urls: [],
	favorites: []
};


// actions
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const PUT_URLS = 'PUT_URLS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const CLEAR_FAVORITES = 'CLEAR_FAVORITES';


// action creators
export const updateSearchTerm = (search_term) => ({ type: UPDATE_SEARCH_TERM, search_term });
export const putUrls = (urls) => ({ type: PUT_URLS, urls });
export const addFavorite = (fav) => ({ type: ADD_FAVORITE, fav });
export const clearFavorites = () => ({ type: CLEAR_FAVORITES });


// thunk creators
export const dispatchSearchTerm = (search_term) => (dispatch) => {
	dispatch(updateSearchTerm(search_term));
	dispatchGifSearch(search_term)(dispatch);
}

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
			// extract usable url info
			let i = url.indexOf('?');
			return url.slice(0, i);
		});
}

export const dispatchAddFavorite = (fav) => (dispatch) => {
	dispatch(addFavorite(fav));
}

export const dispatchClearFavorites = () => (dispatch) => {
	dispatch(clearFavorites());
}


//reducer
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_SEARCH_TERM:
			return Object.assign( {}, state, { search_term: action.search_term });
		case PUT_URLS:
			return Object.assign( {}, state, { urls: action.urls } );
		case ADD_FAVORITE:
			return checkDuplicateAndUpdate(state, action.fav);
		case CLEAR_FAVORITES:
			return Object.assign( {}, state, { favorites: [] });
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