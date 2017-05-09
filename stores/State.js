import Immutable from 'immutable'

const MyState = Immutable.Record({
  todos: new Immutable.Map({})
})

const State = new MyState()

export default State