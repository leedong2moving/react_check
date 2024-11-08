import React, { Component } from 'react';

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Component1',
    };
  }

  handleClick = () => {
    this.setState({
      text: this.state.text === 'Component1' ? 'You clicked the button!' : 'Component1',
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
