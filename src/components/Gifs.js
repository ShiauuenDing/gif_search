import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchAddFavorite } from '../store';



class Gifs extends Component {

	constructor() {
		super();
		this.state = {
			items: [],
			fireRedirect: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(evt) {
		console.log('handleSubmit evt.target.value', evt.target.value);
		evt.preventDefault();
		// this.setState({
		// 	fireRedirect: true
		// });
	}



	render() {
		console.log('this.props', this.props);
		const urls = this.props.urls;
		// create save to favorite button
		// thunk the saves to the store


		return (
			<div>

			{
				urls.map(url => (
					<div key={url.id}>
						<form id='add_to_favorite' onSubmit={this.handleSubmit}>
							<img src={url.u} alt='' />
							<span className='input-group-btn'>
							 	<button type='submit'>Add to Favorites</button>
							</span>
						</form>
					</div>
				))

			}
			</div>

		);
	}

}



const mapState = (state) => {
	console.log('state', state);
	return {
		urls: state.urls,
		favorites: state.favorites
	}
}


const mapDispatch = (dispatch) => {
	return {
		add_favorite: (fav) => dispatch(dispatchAddFavorite(fav))
	}
}

export default connect(mapState, mapDispatch)(Gifs);