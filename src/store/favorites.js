import { favesRef } from '../config/firebase';


// actions
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const CLEAR_FAVORITES = 'CLEAR_FAVORITES';
export const FETCH_FAVORITES = 'FETCH_FAVORITES';


// action creators
export const addFavorite = (fave) => ({ type: ADD_FAVORITE, fave });
export const clearFavorites = () => ({ type: CLEAR_FAVORITES });
export const fetchFavorites = () => ({ type: FETCH_FAVORITES });


// thunk creators
export const dispatchAddFavorite = (fave) => (dispatch) => {
  favesRef.push().set(fave);
  dispatch(addFavorite(fave));
}

export const dispatchClearFavorites = () => (dispatch) => {
  favesRef.remove();
  dispatch(clearFavorites());
}

export const dispatchFetchFavorites = () => (dispatch) => {
  favesRef.on('value', snapshot => {
    dispatch({
      type: FETCH_FAVORITES,
      allFavorites: snapshot.val()
    })
  })
}


//reducer
export default function reducer (state = { favorites: [] }, action) {
  switch(action.type) {
    case ADD_FAVORITE:
      return checkDuplicateAndUpdate(state, action.fave);
    case FETCH_FAVORITES:
      return action.allFavorites;
    case CLEAR_FAVORITES:
      return Object.assign( {}, state, { favorites: [] });
    default:
      return state;
  }
}

const checkDuplicateAndUpdate = (state, newFave) => {
  if(state.favorites.includes(newFave)) {
    return state;
  } else {
    return Object.assign( {}, state, { favorites: [newFave, ...state.favorites] } );
  }
}