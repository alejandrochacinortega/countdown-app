import React from 'react';
import './app.css'
import Clock from './Clock';

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
        <input placeholder="new date"
               onChange={event => this.setState({newDeadline: event.target.value})}/>
        <button onClick={() => this.changeDeadline()}>Submit</button>
      </div>
    )
  }
}

export default App;
