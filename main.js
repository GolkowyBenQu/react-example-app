import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App.jsx'
import About from './components/About.jsx'
import todosReducers from './reducers/todosReducers'
import userReducers from './reducers/userRedicers'

const reducers = combineReducers({
  todosReducers,
  userReducers
})

const store = createStore(reducers, {})

ReactDOM.render((
  <Provider store = {store}>
    <Router history = {browserHistory}>
      <Route path = "/" component = {App} />
      <Route path = "/about" component = {About} />
    </Router>
  </Provider>
), document.getElementById('app'))