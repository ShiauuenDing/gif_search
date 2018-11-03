import React, { Component } from 'react';
import { Search, Gifs, Favorites } from './';
import { Switch, Route } from 'react-router-dom';


class Routes extends Component {

	render() {
		return (
			<Switch>
				<Route exact path='/' component={Search} />
				<Route exact path='/search' component={Search} />
				<Route exact path='/gifs' component={Gifs} />
				<Route exact path='/favorites' component={Favorites} />
			</Switch>
		)
	}
	
}

export default Routes;