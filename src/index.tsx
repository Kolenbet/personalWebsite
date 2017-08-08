import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import Main from './app/containers/Main';
import About from './app/containers/about';
import Contacts from './app/containers/contacts';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './app/reducers/index';
import thunk from 'redux-thunk';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Main} />
      <Route path='/about' component={About} />
      <Route path='/contacts' component={Contacts} />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);