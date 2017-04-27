import React from 'react'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-inverse collapseOnSelect">
        { this.props.children }
      </nav>
    )
  }
}

export default Navbar