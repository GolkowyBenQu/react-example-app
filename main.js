import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import App from './components/App.jsx'
import About from './components/About.jsx'
import todosReducers from './reducers/todosReducers'
import userReducers from './reducers/userReducers'
import dataRequestReducers from './reducers/dataRequestReducers'

const reducers = combineReducers({
  todosReducers,
  userReducers,
  dataRequestReducers
})

const store = createStore(
  reducers,
  {
    dataRequestReducers: {
      isLoading: false,
      isError: false,
      repositories: []
    }
  },
  // applyMiddleware(thunk)
  applyMiddleware(promiseMiddleware({
    promiseTypeSuffixes: ['REQUESTED', 'DONE', 'FAILED']
  }))
)

ReactDOM.render((
  <Provider store = {store}>
    <Router history = {browserHistory}>
      <Route path = "/" component = {App} />
      <Route path = "/about" component = {About} />
    </Router>
  </Provider>
), document.getElementById('app'))