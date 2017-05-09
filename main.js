import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './components/App.jsx'
import About from './components/About.jsx'
import todoApp from './reducers/reducers'

// const todoApp = combineReducers({
//   todos,
//   routing: routerReducer
// })

let store = createStore(todoApp)
// console.log(store)

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