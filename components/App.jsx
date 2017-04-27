import React from 'react'
import AppNavbar from './AppNavbar.jsx'
import SignInForm from './SignInForm.jsx'
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

    const xhr = new XMLHttpRequest();
    xhr.open('post', 'http://127.0.0.1:8000/');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        console.log('The form is valid');
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
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
    return (
      <div>
        <AppNavbar />
        <SignInForm onSubmit={this.onSubmit} onChange={this.onChange} />
        {/*<AppContent />*/}
        {/*<AppFooter />*/}
      </div>
    )
  }
}

export default App