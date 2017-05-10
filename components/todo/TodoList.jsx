import React from 'react'
import Todo from './Todo.jsx'

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map(
            todo => <Todo
              key = {todo.get('id')}
              {...todo.toJS()}
              onToggleClick = {this.props.onToggleClick}
            />
          )
        }
      </ul>
    )
  }
}

export default TodoList