import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import React Router Dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Bindings that let us use react and redux together
import { Provider } from 'react-redux';

// Named export of History within store
import store, { history } from './store';

const router = (
  // Provider exposes store to application
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>

  </Provider>
)

render(router, document.getElementById('root'));
