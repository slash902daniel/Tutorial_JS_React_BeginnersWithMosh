import React, { Component } from "react";

class Counter extends Component {
  state = {  
    count: 0
  }

  badgeStyles = {
    fontSize: 10,
    fontWeight: "bold"
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.badgeStyles} className="badge badge-primary m-2">{this.formatCount()}</span>
        <button style={ {fontSize: 20 }} className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count
   }
}

export default Counter;
