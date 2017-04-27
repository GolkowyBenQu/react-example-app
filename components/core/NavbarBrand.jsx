import React from 'react'
import { Link } from 'react-router'

class NavbarBrand extends React.Component {
  render() {
    return (
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Brand</Link>
      </div>
    )
  }
}

export default NavbarBrand