import React from 'react';
import './app.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-tittle">Countdown to December 25, 2017</div>
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours"> 30 hours</div>
          <div className="Clock-minutes">15 minutes </div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
        <input placeholder="new date" />
        <button>Submit</button>
      </div>
    )
  }
}

export default App;
