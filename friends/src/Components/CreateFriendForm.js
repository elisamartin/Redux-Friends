import React from 'react';
import { connect } from 'react-redux';
import { createFriends } from '../Actions/index';

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

	createFriend = (event) => {
		event.preventDefault();
		this.props.createFriends(this.state.friend);
		this.setState({
			friend: {
				name: '',
				email: '',
				age: ''
			}
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.createFriend}>
					<input onChange={this.inputHandler} placeholder="name" value={this.state.name} name="name" />
					<input onChange={this.inputHandler} placeholder="email" value={this.state.email} name="email" />
					<input onChange={this.inputHandler} placeholder="age" value={this.state.age} name="age" />
					<button type="submit">Add Friend</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { createFriends })(CreateFriendForm);
