import React from 'react'

import AppNavbar from './AppNavbar.jsx'
import SignInForm from './SignInForm.jsx'
import TodoApp from './TodoApp.jsx'
import Repositories from './Repositories'

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

  onSubmit(event) {
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
      .catch(error => console.log(error))
      .then(result => console.log(result))
  }

  onChange(event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value

    this.setState({
      user
    })
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <TodoApp />
        <Repositories/>
        <SignInForm onSubmit={this.onSubmit} onChange={this.onChange}/>
        {/*<AppContent />*/}
        {/*<AppFooter />*/}
      </div>
    )
  }
}

export default App