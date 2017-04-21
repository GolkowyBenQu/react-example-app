import React from 'react'
import Radium from 'radium'

class Table extends React.Component {
  render() {
    return (
      <table>
        {
          this.props.data.map((person, i) => <RadiumTableRow key = {i} data = {person} />)
        }
      </table>
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

export default Table