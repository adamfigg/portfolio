import { GET_PROJECTS } from './types';

import db from './../../../db';

export const getProjects = callback => {
	return async dispatch => {
		const json = db;
		dispatch({ type: GET_PROJECTS, payload: json });
	}
}