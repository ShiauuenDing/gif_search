import React, { Component } from 'react';
import { Redirect } from 'react-router';
import store, { dispatchGifSearch } from '../store';


class Search extends Component {

	constructor() {
		super();
		this.state = {
			search: '',
			redirect: false
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
			redirect: true
		});
	}


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
        {this.state.redirect && (
          <Redirect to="/gifs" />
        )}
			</div>
		)
	}
}


export default Search;