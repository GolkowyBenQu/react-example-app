import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

import AppNavbar from './AppNavbar.jsx'
import SignInForm from './SignInForm.jsx'
import AddTodo from './AddTodo.jsx'
import TodoList from './TodoList.jsx'

// import AppContent from './AppContent.jsx'
// import AppFooter from './AppFooter.jsx'

// login
// https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components
// https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit (event) {
    event.preventDefault()

    const email = encodeURIComponent(this.state.user.email)
    const password = encodeURIComponent(this.state.user.password)
    const formData = `email=${email}&password=${password}`

    const config = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // body: formData
      body: JSON.stringify({
        email: email,
        password: password
      })
    }

    const promise = fetch('http://127.0.0.1:8000/', config)

      promise
      .catch( error => console.log(error) )
      .then( result => console.log(result) )

    // const xhr = new XMLHttpRequest();
    // xhr.open('post', 'http://127.0.0.1:8000/');
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {
    //   if (xhr.status === 200) {
    //     // success
    //
    //     // change the component-container state
    //     this.setState({
    //       errors: {}
    //     });
    //
    //     console.log('The form is valid');
    //   } else {
    //     // failure
    //
    //     const errors = xhr.response.errors ? xhr.response.errors : {};
    //     errors.summary = xhr.response.message;
    //
    //     this.setState({
    //       errors
    //     });
    //   }
    // });
    // xhr.send(formData);
  }

  onChange (event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value

    this.setState({
      user
    })
  }

  render() {
    const { dispatch, visibleTodos } = this.props

    return (
      <div>
        <AppNavbar />
        <AddTodo
          onAddClick = { text => dispatch(addTodo(text)) }
        />
        <TodoList todos = {visibleTodos} />
        <SignInForm onSubmit={this.onSubmit} onChange={this.onChange} />
        {/*<AppContent />*/}
        {/*<AppFooter />*/}
      </div>
    )
  }
}

function select(state) {
  return {
    visibleTodos: state.todos
  }
}

export default connect(select)(App)