import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import About from './components/About.jsx'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render((
  <Router history = {browserHistory}>
    <Route path = "/" component = {App} />
      {/*<IndexRoute component = {App} />*/}
      {/*<Route path = "home" component = {Home} />*/}
    <Route path = "/about" component = {About} />
      {/*<Route path = "contact" component = {Contact} />*/}
  </Router>
), document.getElementById('app'))