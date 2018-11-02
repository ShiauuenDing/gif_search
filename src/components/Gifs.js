import React, { Component } from 'react';
// import { Redirect } from 'react-router';
import { connect } from 'react-redux';


class Gifs extends Component {

	constructor() {
		super();
		this.state = {
			
		};

	}



	render() {
		console.log('this.props.urls', this.props.urls);
		const urls = this.props.urls;
		// create save to favorite button
		// thunk the saves to the store

		return (
			<div>

			{
				urls.map(url => (
					<div key={url.id}>
						<img src={url.u} alt='' />
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
		urls: state.urls
	}
}


const mapDispatch = (dispatch) => {
	return {

	}
}

export default connect(mapState, mapDispatch)(Gifs);