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
		this.setRedirect = this.setRedirect.bind(this);
		this.renderRedirect = this.renderRedirect.bind(this);
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
		// this.setState({
		// 	redirect: true
		// });
		this.setRedirect();
	}

	setRedirect() {
		this.setState({
			redirect: true
		});
	}

	renderRedirect() {
		if(this.state.redirect) {
			return <Redirect to='/gifs' />
		}
	}

	// send "kitten" when empty form is submitted

	render() {
		return (
			<div>
				{this.renderRedirect()}
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