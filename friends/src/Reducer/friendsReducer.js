import { FETCH_FRIENDS, FETCH_SUCCESS, ERROR } from '../Actions';

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
		default:
			return state;
	}
};
