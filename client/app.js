import React from 'react';
import { render } from 'react-dom';
import store from '../store';
import Homepage from './homepage';

const history = syncHistoryWithStore(createBrowserHistory(), store)

const App = () => (
  <Provider store={store}>
      
  </Provider>
);

render(<App />, document.getElementById('app'));
