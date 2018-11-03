import React, { Component } from 'react';
import { Redirect } from 'react-router';
import store, { dispatchGifSearch } from '../store';


class Search extends Component {

	constructor() {
		super();
		this.state = {
			search: '',
			fireRedirect: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			search: evt.target.value
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		store.dispatch(dispatchGifSearch(this.state.search));
		this.setState({
			fireRedirect: true
		});
	}

	// send "kitten" when empty form is submitted

	render() {
		return (
			<div>
				<form id='gif_search_form' onSubmit={this.handleSubmit}>
					<div>
						<label>What gifs would ya like to see?</label>
						<br/>
						<input
							type='text'
							name='search'
							value={this.state.search}
							onChange={this.handleChange}
						/>
					</div>
					{/*<div>
						<span className='input-group-btn'>
							<button type='submit'>Send!</button>
						</span>
					</div>*/}
				</form>
				{this.state.fireRedirect && (
					<Redirect to='/gifs' />
				)}
			</div>
		)
	}
}

export default Search;

// const mapState = (state) => {
// 	console.log(state);
// 	return {

// 	}
// }

// const mapDispatch = (dispatch) => {
// 	return {
// 		gifs_search: () => dispatch(dispatchGifsSearch())
// 	}
// }

// export default connect(mapState, mapDispatch)(Search);