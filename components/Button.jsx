import React from 'react'
import Radium from 'radium'

class Button extends React.Component {
  render() {
    return (
      <a href={url} style={buttonStyles}>{this.props.text}</a>
    )
  }
}

const buttonStyles = {
  backgroundColor: '#333',
  color: '#ffffff',
  display: 'block',
  padding: '10px',
  textAlign: 'center',
  textDecoration: 'none',
  maxWidth: '200px',

  ':hover': {
    backgroundColor: '#cccccc',
    color: '#333333'
  }
}

const url = 'http://google.com'

export default Radium(Button)