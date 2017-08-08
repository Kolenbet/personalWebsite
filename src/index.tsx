import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import App from './app/index';
import Empty from './app/containers/emptyPage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './app/reducers/index';
import thunk from 'redux-thunk';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/empty' component={Empty} />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);