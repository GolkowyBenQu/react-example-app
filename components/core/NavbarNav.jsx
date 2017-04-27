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
      </ul>
    )
  }
}

export default NavbarNav