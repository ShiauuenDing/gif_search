import axios from 'axios';


// actions
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const PUT_URLS = 'PUT_URLS';


// action creators
export const updateSearchTerm = (search_term) => ({ type: UPDATE_SEARCH_TERM, search_term });
export const putUrls = (urls) => ({ type: PUT_URLS, urls });


// thunk creators
export const dispatchSearchTerm = (search_term) => (dispatch) => {
  dispatch(updateSearchTerm(search_term));
  dispatchGifSearch(search_term)(dispatch);
}

export const dispatchGifSearch = (search) => (dispatch) => {
  axios.get('https://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&limit=10')
    .then(res => res.data.data)
    .then(gifsData => {
      // const gifUrls = putGifUrls(gifsData);
      const gifUrls = gifsData.map(d => d.images.original.url);
      dispatch(putUrls(gifUrls));
    })
}

// const putGifUrls = (data) => {
//   return data.map(d => d.images.fixed_height.url).map(url => {
//       // extract usable url info
//       let i = url.indexOf('?');
//       return url.slice(0, i);
//     });
// }


//reducer
export default function reducer (state = { search_term: '', urls: [] }, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return Object.assign( {}, state, { search_term: action.search_term });
    case PUT_URLS:
      return Object.assign( {}, state, { urls: action.urls } );
    default:
      return state;
  }
}