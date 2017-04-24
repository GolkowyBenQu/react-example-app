import React from 'react'
// import Button from './Button.jsx'
import { Button, Nav, NavItem } from 'react-bootstrap'
import Table from './Table.jsx'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      staticData: [
        {
          id: 1,
          name: 'name1'
        },
        {
          id: 2,
          name: 'name2'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Nav>
          <Button text="abc1" >test</Button>
          <Button text="abc2" />
          <Button text="abc3" />
          <Button text="abc4" />
          <NavItem href="http://google.pl">abc</NavItem>
        </Nav>
        <Table data={this.state.staticData} />
      </div>
    )
  }
}

export default App