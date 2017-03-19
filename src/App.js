import React from 'react';
import './app.css'
import Clock from './Clock';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'March 21, 2017',
      newDeadline: ''
    }
  }
  
  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-tittle">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl className="Deadline-input"
                       placeholder="new date"
                       onChange={event => this.setState({newDeadline: event.target.value})} />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      
      </div>
    )
  }
}

export default App;
