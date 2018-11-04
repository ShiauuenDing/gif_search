import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { dispatchAddFavorite } from '../store';


class Gifs extends Component {

	constructor() {
		super();
		// this.state = {
		// 	redirect: false
		// };
		this.setRedirect = this.setRedirect.bind(this);
		// this.renderRedirect = this.renderRedirect.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	setRedirect() {
		// this.setState({
		// 	redirect: true
		// });
		this.props.history.push('/favorites');
	}

	// renderRedirect() {
	// 	if(this.state.redirect) {
	// 		return <Redirect push to='/favorites' />
	// 	}
	// }

	handleClick(url, e) {
		this.props.add_favorite(url);
	}


	render() {
		const urls = this.props.urls;
		return (
			<div>
				{
					urls.map(url => (
						<div key={url}>
							<img src={url} alt='' />
							<span>
							 	<button onClick={this.handleClick.bind(this, url)}>Add</button>
							</span>
						</div>
					))
				}
				<div>
					{/*{this.renderRedirect()}*/}
					<button onClick={this.setRedirect}>Favorites</button>
				</div>
			</div>
		);
	}

}


const mapStateToProps = (state) => {
	return {
		urls: state.urls,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		add_favorite: (fav) => dispatch(dispatchAddFavorite(fav))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Gifs);