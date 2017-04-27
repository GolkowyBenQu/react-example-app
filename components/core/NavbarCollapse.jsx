import React from 'react'

class NavbarCollapse extends React.Component {
  render() {
    return (
      <div className="collapse navbar-collapse">
        { this.props.children }
      </div>
    )
  }
}

export default NavbarCollapse