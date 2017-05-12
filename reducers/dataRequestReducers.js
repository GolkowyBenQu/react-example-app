import {
  GET_DATA_REQUESTED,
  GET_DATA_DONE,
  GET_DATA_FAILED
} from '../actions/dataRequestActions'

const dataRequestReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_DATA_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case GET_DATA_DONE:
      return {
        ...state,
        isLoading: false,
        repositories: action.payload
      }
    case GET_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      return state
  }
}

export default dataRequestReducers