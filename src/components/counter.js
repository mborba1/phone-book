import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//simple counter app using function
function Counter() {
  const [ counter, setCounter ] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1)
  }

  //render() {
    return (
      <div id="mainArea">
        <p>button count: <span>{counter}</span></p>
        <button id="mainButton" onClick={handleClick}>Increase</button>
      </div>
    );
  //}
}


ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);

// using class

import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0
    }
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({count:this.state.count+1});
  }

  render() {
    return (
      <div id="mainArea">
        button count: <span>{this.state.count}</span>
        <button onClick={this.increment} id="mainButton">Increase</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);

