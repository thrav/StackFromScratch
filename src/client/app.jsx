import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducer } from 'redux-immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import dogReducer from './reducers/dog-reducer';
import BarkMessage from './containers/bark-message';
import BarkButton from './containers/bark-button';

const store = createStore(combineReducer({
  dog: dogReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BarkMessage />
      <BarkButton />
    </div>
  </Provider>
  , document.querySelector('.app')
);
