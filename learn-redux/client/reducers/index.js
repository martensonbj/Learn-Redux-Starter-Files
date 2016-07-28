import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// What Lives In State: Posts, Comments, Changes to Route History
const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;
