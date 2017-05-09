import React from 'react'

class Todo extends React.Component {
  render() {
    let todoLink = <span>{this.props.text}</span>
    if (this.props.isDone === true) {
      todoLink = <s>{this.props.text}</s>
    }
    return (
      <li onClick={() => this.props.onToggleClick(this.props.id)}>
        {todoLink}
      </li>
    )
  }
}

export default Todo