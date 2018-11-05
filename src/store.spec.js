import * as my_store from './store';

// action creator tests
describe('actions', () => {
	it('updates the search term', () => {
		const search_term = 'kittens';
		const expectedAction = {
			type: my_store.UPDATE_SEARCH_TERM,
			search_term
		};
		expect(my_store.updateSearchTerm(search_term)).toEqual(expectedAction);
	})

	it('updates urls', () => {
		const urls = ['url1', 'url2'];
		const expectedAction = {
			type: my_store.PUT_URLS,
			urls
		};
		expect(my_store.putUrls(urls)).toEqual(expectedAction);
	})

	it('adds the url of a favorite GIF', () => {
		const fav = ['my_fav'];
		const expectedAction = {
			type: my_store.ADD_FAVORITE,
			fav
		};
		expect(my_store.addFavorite(fav)).toEqual(expectedAction);
	})

	it('clears all favorite GIFs', () => {
		const expectedAction = {
			type: my_store.CLEAR_FAVORITES,
		};
		expect(my_store.clearFavorites()).toEqual(expectedAction);
	})
})



// TODO: Add tests for thunks.