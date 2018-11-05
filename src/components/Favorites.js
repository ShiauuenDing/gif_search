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
				<div>
					<button className='navbutton' onClick={this.handleClick}>Clear favorites</button>
				</div>
				<div className='box'>
				{
					favs.map(fav => (
						<div key={fav} className='gifbox'>
							<img src={fav} alt='' />
						</div>
					))
				}
				</div>
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