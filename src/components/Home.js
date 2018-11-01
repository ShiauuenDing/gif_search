import React, { Component } from 'react';

class Home extends Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<form id='gif_search_form' onSubmit={this.handleSubmit}>
					<div>
						<lable>What gif would ya like to see?</lable>
						<input
							type='text'
							name='name'
							value={this.state.name}
							onChange={this.handleChange}
						/>
						<span className='input-group-btn'>
							<button type='submit'>Send!</button>
						</span>
					</div>
				</form>
			</div>
		)
	}

}

export default Home;