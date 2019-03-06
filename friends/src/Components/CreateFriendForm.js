import React from 'react';
import { connect } from 'react-redux';

class CreateFriendForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			friend: {
				name: '',
				email: '',
				age: ''
			}
		};
	}

	inputHandler = (event) => {
		this.setState({ friend: { ...this.state.friend, [event.target.name]: event.target.value } });
	};

	render() {
		return (
			<div>
				<form>
					<input onChange={this.inputHandler} placeholder="name" value={this.state.name} name="name" />
					<input onChange={this.inputHandler} placeholder="email" value={this.state.email} name="email" />
					<button type="submit">Add Friend</button>
				</form>
			</div>
		);
	}
}

export default connect(null)(CreateFriendForm);
