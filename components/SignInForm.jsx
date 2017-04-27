import React from 'react'
import { TextField } from 'react-dom'

class SignInForm extends React.Component {

  render () {
    return (
      <form action="/" onSubmit={this.props.onSubmit}>
        <div>
          login:
          <input name="email" onChange={this.props.onChange} />
        </div>
        <div>
          password:
          <input type="password" name="password" onChange={this.props.onChange} />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    )
  }
}

export default SignInForm