import React from "react";
export default class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  aumentar = () => {
    this.setState({ counter: this.state.counter + 5 });
  };
  disminuir = () => {
    this.state.counter &&
      this.setState({
        counter: this.state.counter - 5,
      });
  };
  resetear = () => {
    this.setState({counter : 0})
  }
  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.aumentar}>Aumentar</button>
        <button onClick={this.disminuir}>Dismiuir</button>
        <button onClick={this.resetear}>reset</button>
      </div> 
    );
  }
}

// import React, { Component } from 'react'

// export default class demolanding extends Component {
//   render() {
//     return (
//       <div>demolanding</div>
//     )
//   }
// }.
