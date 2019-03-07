import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const ERROR = 'ERROR';
export const SUCCESSFUL_LOGIN = 'SUCCESSFUL_LOGIN';
export const CREATE_FRIENDS = 'CREATE_FRIENDS';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';

const token = 'eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ';
axios.defaults.headers.common['Authorization'] = token;

export const fetchFriends = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_FRIENDS });
		axios
			.get('http://localhost:5000/api/friends')
			.then((res) => {
				dispatch({
					type: FETCH_SUCCESS,
					payload: res.data
				});
			})
			.catch(() => {
				dispatch({
					type: ERROR,
					payload: 'Friends data not found!'
				});
			});
	};
};

export const createFriends = (friend) => {
	return (dispatch) => {
		dispatch({ type: CREATE_FRIENDS });
		axios
			.post('http://localhost:5000/api/friends', friend)
			.then((res) => {
				dispatch({
					type: CREATE_SUCCESS,
					payload: res.data
				});
			})
			.catch(() => {
				dispatch({
					type: ERROR,
					payload: 'Friends could not load :('
				});
			});
	};
};
