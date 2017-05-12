import React from 'react'
import { Link } from 'react-router'

let styles = 'nav navbar-nav'

class NavbarNav extends React.Component {

  constructor(props) {
    styles += props.pullRight ? ' navbar-right' : ''
    super(props)
  }

  render() {
    return (
      <ul className={styles}>
        <li>
          <Link className="" to="/about">About</Link>
        </li>
        <li>
          <Link className="" to="/todo_app">Todo App</Link>
        </li>
        <li>
          <Link className="" to="/repositories">Repositories</Link>
        </li>
        <li>
          <Link className="" to="/login">Login</Link>
        </li>
      </ul>
    )
  }
}

export default NavbarNav