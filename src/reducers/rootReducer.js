import { combineReducers } from 'redux';

import { subjectsReducer } from './subjectsReducer.js';


export const rootReducer = combineReducers({

    subjects: subjectsReducer

})