import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../actions/actions'

import AddTodo from './todo/AddTodo.jsx'
import TodoList from './todo/TodoList.jsx'

class TodoApp extends React.Component {
  render() {
    const { onAddClick, onToggle, visibleTodos } = this.props

    return (
      <div>
        <AddTodo
          onAddClick = { onAddClick }
        />
        <TodoList todos = {visibleTodos} onToggleClick = {onToggle} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    visibleTodos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: text => dispatch(addTodo(text)),
    onToggle: id => dispatch(toggleTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)