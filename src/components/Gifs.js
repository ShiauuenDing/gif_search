import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchAddFavorite } from '../store';
import { Redirect } from 'react-router';




class Gifs extends Component {

	constructor() {
		super();
		this.state = {
			items: [],
			redirect: false
		};
		this.setRedirect = this.setRedirect.bind(this);
		this.renderRedirect = this.renderRedirect.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	setRedirect() {
		this.setState({
			redirect: true
		});
	}

	renderRedirect() {
		if(this.state.redirect) {
			return <Redirect to='/favorites' />
		}
	}

	handleClick(url, e) {
		this.props.add_favorite(url);
	}



	render() {
		const urls = this.props.urls;
		console.log('favorites in Gifs', this.props.favorites);

		return (
			<div>
				{
					urls.map(url => (
						<div key={url.id}>
							<img src={url.u} alt='' />
							<span className='input-group-btn'>
							 	<button onClick={this.handleClick.bind(this, url.u)}>Add</button>
							</span>
						</div>
					))
				}
				<div>
					{this.renderRedirect()}
					<button onClick={this.setRedirect}>Favorites</button>
				</div>

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