import React from 'react'
import { connect } from 'react-redux'

import AddTodo from './todo/AddTodo.jsx'
import TodoList from './todo/TodoList.jsx'
import { mapStateToProps, mapDispatchToProps } from '../actions/actions.js'

class TodoApp extends React.Component {
  render() {
    const { onAddClick, onToggle, todosReducers } = this.props

    return (
      <div>
        <AddTodo
          onAddClick = { onAddClick }
        />
        <TodoList todos = {todosReducers} onToggleClick = {onToggle} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)