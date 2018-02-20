import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom';
import store from './store';
import Homepage from './containers/homepage';

const history = syncHistoryWithStore(createBrowserHistory(), store)

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Homepage} />
    </Router>
  </Provider>
);

render(<App />, document.getElementById('app'));
