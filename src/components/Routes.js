import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Search, Gifs, Favorites } from './';



class Routes extends Component {

	render() {
		return (
			<Switch>
				<Route exact path='/' render={ () => <Redirect to='/search' /> } />
				<Route exact path='/search' component={Search} />
				<Route exact path='/gifs' component={Gifs} />
				<Route exact path='/favorites' component={Favorites} />
			</Switch>
		)
	}	
}

export default Routes;