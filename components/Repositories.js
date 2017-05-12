import React from 'react'
import {connect } from 'react-redux'

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