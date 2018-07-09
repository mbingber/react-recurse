import React, { Component } from 'react';
import './App.css';

import Recursion from './Recursion';
import Controls from './Controls';

class App extends Component {
  state = {
    numSquares: 50,
    degreeOfChange: 10,
  };

  changeNumSquares = numSquares => this.setState({ numSquares });
  changeDegreeOfChange = degreeOfChange => this.setState({ degreeOfChange });

  render() {
    const { numSquares, degreeOfChange } = this.state;
    return (
      <div className="App">
        <div>
          <Recursion numSquares={numSquares} scale={degreeOfChange / 100} />
        </div>
        <div>
          <Controls
            changeNumSquares={this.changeNumSquares}
            numSquares={this.state.numSquares}
            changeDegreeOfChange={this.changeDegreeOfChange}
            degreeOfChange={degreeOfChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
