import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { store } from './Store';
import { Page } from './Layout/Page';

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>
  ,
  document.body
)
