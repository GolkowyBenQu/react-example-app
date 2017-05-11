import React from 'react'
import { connect } from 'react-redux'

import AppNavbar from './AppNavbar.jsx'
import { mapStateToProps, mapDispatchToProps } from '../actions/actions.js'

class About extends React.Component {
  render() {
    const { onCLickEvent } = this.props

    return (
      <div>
        <AppNavbar />
        <h1>About</h1>
        <button onClick = { onCLickEvent }>
          Click me
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)