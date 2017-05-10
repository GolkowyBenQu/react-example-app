import React from 'react'

class Todo extends React.Component {
  render() {
    let todoLink = <span ref="item">{this.props.text}</span>
    if (this.props.isDone === true) {
      todoLink = <s ref="item">{this.props.text}</s>
    }
    return (
      <li onClick={(e) => this.handleOnCLick(e)}>
        {todoLink}
      </li>
    )
  }

  handleOnCLick(e) {
    this.props.onToggleClick(this.props.id)
  }
}

export default Todo