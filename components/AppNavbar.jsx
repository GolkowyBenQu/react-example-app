import React from 'react'
import { Link } from 'react-router'

class AppNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-inverse collapseOnSelect">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Brand</Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link className="" to="/about">About</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link className="" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default AppNavbar