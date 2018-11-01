import React, { Component } from 'react';

class Home extends Component {

	constructor() {
		super();
		this.state = {
			search: '',
			fireRedirect: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			search: evt.target.value
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		// do some redux thing
		this.setState({
			fireRedirect: true
		});
	}

	render() {
		return (
			<div>
				<form id='gif_search_form' onSubmit={this.handleSubmit}>
					<div>
						<lable>What gif would ya like to see?</lable>
						<input
							type='text'
							name='search'
							value={this.state.name}
							onChange={this.handleChange}
						/>
						<span className='input-group-btn'>
							<button type='submit'>Send!</button>
						</span>
					</div>
				</form>
				{/* {this.state.fireRedirect && (
					<Redirect to='/' />
				)}
				*/}
			</div>
		)
	}

}

export default Home;