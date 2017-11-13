import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logger from 'redux-logger'
import reducers from './reducers';
import NavigationBar from './components/navigation-bar';
import Chat from './components/chat';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, promise, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <BrowserRouter>
      <div>
        <NavigationBar />
        <Switch>
          { /* <Route exact={true} path="/posts/new" component={PostNew} /> */}
          <Chat />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
