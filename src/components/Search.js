import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import store, { dispatchGifsData } from '../store';

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
		let data;
		axios.get('https://api.giphy.com/v1/gifs/search?q=' + this.state.search + '&api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&limit=5')
			.then(res => {
				data = res.data.data;
				console.log(data);
				})
			.catch(err => {
				console.log('Error fetching data', err);
				})

		this.setState({
			fireRedirect: true
		});
	}


	render() {
		return (
			<div>
				<form id='gif_search_form' onSubmit={this.handleSubmit}>
					<div>
						<label>What gifs would ya like to see?</label>
						<input
							type='text'
							name='search'
							value={this.state.search}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<span className='input-group-btn'>
							<button type='submit'>Send!</button>
						</span>
					</div>
				</form>
				{this.state.fireRedirect && (
					<Redirect to='/gifs' />
				)}
			</div>
		)
	}
}

const mapState = (state) => {
	console.log(state);
	return {
		
	}
}

const mapDispatch = (dispatch) => {
	return {
		gifs_data: () => dispatch(dispatchGifsData())
	}
}

export default connect(mapState, mapDispatch)(Search);