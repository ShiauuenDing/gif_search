import React, { Component } from 'react';
import store, { dispatchGifSearch } from '../store';


class Search extends Component {

	constructor() {
		super();
		this.state = {
			search: '',
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
		this.props.history.push('/gifs');
	}


	// write tests
	// search term persists in form
	// send "kitten" when empty form is submitted or api return no gifs

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
				</form>
			</div>
		)
	}
}


export default Search;