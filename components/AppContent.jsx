import React from 'react'
import Table from './Table.jsx'
import AppJumbotron from './AppJumbotron.jsx'

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
        <div>content</div>
        <Table data={this.state.staticData} />
      </div>
    )
  }
}

export default AppContent