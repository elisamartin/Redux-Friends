import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const ERROR = 'ERROR';

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
			.catch((err) => {
				dispatch({
					type: ERROR,
					payload: 'Friends data not found!'
				});
			});
	};
};
