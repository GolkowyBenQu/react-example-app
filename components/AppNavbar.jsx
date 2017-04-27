import React from 'react'
import Navbar from './core/Navbar.jsx'
import NavbarBrand from './core/NavbarBrand.jsx'
import NavbarCollapse from './core/NavbarCollapse.jsx'
import NavbarNav from './core/NavbarNav.jsx'

class AppNavbar extends React.Component {
  render() {
    return (
      <Navbar>
        <NavbarBrand/>
        <NavbarCollapse>
          <NavbarNav pullRight/>
        </NavbarCollapse>
      </Navbar>
    )
  }
}

export default AppNavbar