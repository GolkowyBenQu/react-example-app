import Immutable from 'immutable'

const initialState = Immutable.Record({ name: '',  age: 0 });

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return state.set('name', action.name);
    case 'SET_AGE':
      return state.set('age', action.age);
    default:
      return state;
  }
};

export default userReducer;