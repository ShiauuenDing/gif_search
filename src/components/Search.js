import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchSearchTerm } from '../store';


class Search extends Component {

	constructor() {
		super();
		this.state = {
			search: '',
			changed: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			search: evt.target.value,
			changed: true
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.update_search_term(this.state.search);
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
							value={this.state.changed ? this.state.search : this.props.search_term}
							onChange={this.handleChange}
						/>
					</div>
				</form>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		search_term: state.search_term
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		update_search_term: (search) => dispatch(dispatchSearchTerm(search))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);