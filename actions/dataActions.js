export const GET_DATA_ONE = 'GET_DATA_ONE'
export const GET_DATA_TWO = 'GET_DATA_TWO'

export function getDataOne() {
  return {
    type: GET_DATA_ONE
  }
}

export function getDataTwo() {
  return {
    type: GET_DATA_TWO
  }
}

export function getData(parameter) {
  return (dispatch) => {
    if (parameter) {
      dispatch(getDataOne())
    } else {
      dispatch(getDataTwo())
    }
  }
}