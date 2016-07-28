import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer which has posts, comments, and history
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data in our helper files (es6 posts:posts, comments: comments...syntactic sugar)
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
