import React from 'react'
import AppTable from './AppTable.jsx'
import AppJumbotron from './AppJumbotron.jsx'
import { PageHeader } from 'react-bootstrap'

class AppContent extends React.Component {

  constructor() {
    super()

    this.state = {
      staticData: [
        {
          id: 1,
          name: 'name1'
        },
        {
          id: 2,
          name: 'name2'
        }
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <AppJumbotron />
        <PageHeader>Example page header <small>Subtext for header</small></PageHeader>
        <AppTable data={this.state.staticData} />
      </div>
    )
  }
}

export default AppContent