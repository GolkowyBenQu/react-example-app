import React from 'react'
import Todo from './Todo.jsx'

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map(
            todo => <Todo key = {todo.id} {...todo} />
          )
        }


        {/*{*/}
          {/*this.props.data.map(*/}
            {/*(person, i) => <RadiumTableRow key = {i} data = {person} />)*/}
        {/*}*/}
      </ul>
    )
  }
}

export default TodoList