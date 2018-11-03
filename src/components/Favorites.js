import React, { Component } from 'react';
import { connect } from 'react-redux';




class Favorites extends Component {

	render() {
		const favs = this.props.favorites;
		return (
			<div>
				{
					favs.map(fav => (
						<div key={fav}>
							<img src={fav} alt='' />
						</div>
					))
				}
			</div>
		)
	}

}


const mapState = (state) => {
	console.log('state at Favorites', state);
	return {
		urls: state.urls,
		favorites: state.favorites
	}
}

const mapDispatch = (dispatch) => {
	return {
		
	}
}

export default connect(mapState, mapDispatch)(Favorites);