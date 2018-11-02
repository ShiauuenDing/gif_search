import React, { Component } from 'react';
import { Search, Gifs } from './';
import { Switch, Route } from 'react-router-dom';
// import {connect} from 'react-redux'

class Routes extends Component {

	render() {
		return (
			<Switch>
				<Route exact path='/' component={Search} />
				<Route exact path='/search' component={Search} />
				<Route exact path='/gifs' component={Gifs} />
			</Switch>
		)
	}
	
}

export default Routes;