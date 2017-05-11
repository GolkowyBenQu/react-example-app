import { bindActionCreators } from 'redux'

import * as alertActions from './alertActions'
import * as todosActions from './todosActions'

export function mapStateToProps (state) {
  return {
    ...state
  }
}

export function mapDispatchToProps (dispatch) {
  return {
    onAddClick: text => dispatch(todosActions.addTodo(text)),
    onToggle: id => dispatch(todosActions.toggleTodo(id)),
    onCLickEvent: () => dispatch(alertActions.alertAction())
  }
}