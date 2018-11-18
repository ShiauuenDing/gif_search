import * as my_store from './';
import reducer from './favorites';

describe('action creators and reducer', () => {
	it('adds a favorite', () => {
		const fav = 'http://gighy.kittens1';
		const expectedAction = {
			type: my_store.ADD_FAVORITE,
			fav
		};
		expect(my_store.addFavorite(fav)).toEqual(expectedAction);
	})

	it('returns the initial state', () => {
	expect(reducer(undefined, {})).toEqual({
			favorites: []
		});
	})

	it('updates the list of favorites', () => {
		const fav = 'http://gighy.kittens2';
		const expectedAction = {
			favorites: ['http://gighy.kittens2', 'http://gighy.kittens1']
		};
		expect(reducer({ favorites: ['http://gighy.kittens1'] }, {
			type: my_store.ADD_FAVORITE,
			fav: fav
		})).toEqual(expectedAction);
	})

	it('clears all favorites', () => {
		const expectedAction = {
			type: my_store.CLEAR_FAVORITES
		};
		expect(my_store.clearFavorites()).toEqual(expectedAction);
	})

	it('confirms that the list of favorites is empty', () => {
		expect(reducer({ favorites: ['http://gighy.kittens1'] }, {
			type: my_store.CLEAR_FAVORITES
		})).toEqual({ favorites: [] })
	})
})