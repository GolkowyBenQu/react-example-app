import React from 'react'
import Radium from 'radium'
import { Table } from 'react-bootstrap'

class AppTable extends React.Component {
  render() {
    return (
      <Table hover responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.data.map((person, i) => <RadiumTableRow key = {i} data = {person} />)
        }
        </tbody>
      </Table>
    )
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
      </tr>
    )
  }
}
const RadiumTableRow = Radium(TableRow)

export default AppTable