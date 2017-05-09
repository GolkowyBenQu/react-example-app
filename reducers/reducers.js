import Immutable from 'immutable'

import {ADD_TODO, TOGGLE_TODO} from '../actions/actions'

const init = Immutable.List([])

function todosReducer(state = init, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.push(Immutable.Map({
        id: action.id,
        text: action.text
      }))
    case TOGGLE_TODO:
      return state.map(
        todo => {
          if (todo.get('id') === action.id) {
            return todo.update('isDone', isDone => !isDone)
          } else {
            return todo
          }
        }
      )
    default:
      return state
  }
}

export default todosReducer