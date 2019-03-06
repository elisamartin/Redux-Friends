import React, { Component } from 'react';

import Friends from './Components/Friends';
import CreateFriendForm from './Components/CreateFriendForm';
// import UpdateFriendForm from './Components/UpdateFriendForm';

class App extends Component {
	render() {
		return (
			<div className="App-container">
				<Friends />
				<CreateFriendForm />
			</div>
		);
	}
}

export default App;
