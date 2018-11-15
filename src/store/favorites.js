
// actions
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const CLEAR_FAVORITES = 'CLEAR_FAVORITES';


// action creators
export const addFavorite = (fav) => ({ type: ADD_FAVORITE, fav });
export const clearFavorites = () => ({ type: CLEAR_FAVORITES });


// thunk creators
export const dispatchAddFavorite = (fav) => (dispatch) => {
	dispatch(addFavorite(fav));
}

export const dispatchClearFavorites = () => (dispatch) => {
	dispatch(clearFavorites());
}


//reducer
export default function reducer (state = { favorites: [] }, action) {
	switch(action.type) {
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