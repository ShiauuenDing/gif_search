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


const mapStateToProps = (state) => {
	return {
		favorites: state.favorites
	}
}

export default connect(mapStateToProps)(Favorites);