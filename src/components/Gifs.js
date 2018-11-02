import React, { Component } from 'react';
// import { Redirect } from 'react-router';
import store from '../store';


class Gifs extends Component {

	constructor() {
		super();
		this.state = store.getState();
	}

	componentDidMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		})
	}

	componentWillUnmount() {
		this.unsubscribe();
	}


	render() {

		const urls = this.state.urls;

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


export default Gifs;