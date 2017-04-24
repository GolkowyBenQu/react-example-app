import React from 'react'
import AppNavbar from './AppNavbar.jsx'
import AppContent from './AppContent.jsx'
import AppFooter from './AppFooter.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <AppContent />
        <AppFooter />
      </div>
    )
  }
}

export default App