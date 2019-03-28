import { GET_PROJECTS } from "./../../actions/types";

const initState = [];

const dataReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case GET_PROJECTS:
			return payload;

		default:
			return state;
	};
};

export default dataReducer;