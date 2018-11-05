// import * as actions from '../../actions/TodoActions'
// import * as types from '../../constants/ActionTypes'
// ​
// describe('actions', () => {
//   it('should create an action to add a todo', () => {
//     const text = 'Finish docs'
//     const expectedAction = {
//       type: types.ADD_TODO,
//       text
//     }
//     expect(actions.addTodo(text)).toEqual(expectedAction)
//   })
// })

import * as my_store from './store';

describe('actions', () => {
	it('updates search term to kittens', () => {
		const search_term = 'kittens';
		const expectedAction = {
			type: my_store.UPDATE_SEARCH_TERM,
			search_term
		};
		expect(my_store.updateSearchTerm(search_term)).toEqual(expectedAction)
	})
})