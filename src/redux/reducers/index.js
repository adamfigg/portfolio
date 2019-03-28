import { combineReducers } from 'redux';

import dataReducer from './r/data';

const rootReducer = combineReducers({
	data: dataReducer
});

export default rootReducer;