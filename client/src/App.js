import React from 'react';
import { Provider } from 'react-redux';
import Page from './flex/page';
import Redux from './components/Redux'
import store from './store';
import { Router } from 'react-router-dom';
import history from './history';


function App () {
  return (
    <Page>
      <Provider store={store}>
        <Router history={history}>
            <Redux/>
        </Router>
      </Provider>
    </Page>
  )
}

export default App
