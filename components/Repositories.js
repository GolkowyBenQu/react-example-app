import React from 'react'
import {connect } from 'react-redux'

import AppNavbar from './AppNavbar.jsx'
import { mapStateToProps, mapDispatchToProps } from '../actions/actions.js'

class Repositories extends React.Component {

  componentDidMount() {
    const { getData } = this.props
    getData()
  }

  render() {
    const { isLoading, isError, dataRequestReducers } = this.props

    return (
      <div>
        <AppNavbar />
        <h1>Repositories</h1>
        {
          dataRequestReducers.repositories.map(
            (item, index) => {
              return (
                <div key={index}>
                  {item.name}
                </div>
              )
            }
          )
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repositories)