import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App.jsx'
import About from './components/About.jsx'
import todos from './reducers/reducers'

const todoApp = combineReducers({
  todos,
})

const store = createStore(todoApp)

// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Provider store = {store}>
    <Router history = {browserHistory}>
      <Route path = "/" component = {App} />
        {/*<IndexRoute component = {App} />*/}
        {/*<Route path = "home" component = {Home} />*/}
      <Route path = "/about" component = {About} />
        {/*<Route path = "contact" component = {Contact} />*/}
    </Router>
  </Provider>
), document.getElementById('app'))