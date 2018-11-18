import React, { Component } from 'react';
import { Search, Favorites } from './';


class Navbar extends Component {

	render() {
		return (
			<div>
				<Search />
				<Favorites />
			</div>

		)
	}
}

export default Navbar;