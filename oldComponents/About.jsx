import React from 'react'
import AppNavbar from './AppNavbar.jsx'
import AppContent from './AppContent.jsx'
import AppFooter from './AppFooter.jsx'

class About extends React.Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <h1>About</h1>
        <AppFooter />
      </div>
    )
  }
}

export default About