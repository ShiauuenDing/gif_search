import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchClearFavorites } from '../store';


class Favorites extends Component {

	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(url, e) {
		this.props.clear_favorites();
		this.props.history.push('/search');
	}

	render() {
		const favs = this.props.favorites;
		return (
			<div>
				<span>
				 	<button onClick={this.handleClick}>Clear favorites</button>
				</span>
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


const mapStateToProps = (state) => {
	return {
		favorites: state.favorites
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clear_favorites: () => dispatch(dispatchClearFavorites())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);