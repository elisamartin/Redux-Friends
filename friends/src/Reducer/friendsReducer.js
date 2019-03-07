import { FETCH_FRIENDS, FETCH_SUCCESS, ERROR, CREATE_FRIENDS, CREATE_SUCCESS } from '../Actions';

const initialState = {
	friends: [],
	loading: false,
	error: null
};

export const friendReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_FRIENDS:
			return {
				...state,
				loading: true,
				error: null
			};
		case FETCH_SUCCESS:
			return {
				...state,
				friends: action.payload,
				loading: false,
				error: null
			};
		case ERROR:
			return {
				...state,
				error: action.payload
			};
		case CREATE_FRIENDS:
			return {
				...state,
				loading: true,
				error: null
			};
		case CREATE_SUCCESS:
			return {
				...state,
				friends: action.payload,
				loading: false,
				error: null
			};
		default:
			return state;
	}
};
