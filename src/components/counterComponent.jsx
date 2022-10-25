import React, { Component } from "react";

class Counter extends Component {

  badgeStyles = {
    fontSize: 10,
    fontWeight: "bold"
  }

  render() {
    //console.log("render props: ", this.props);
    return (
      <React.Fragment>
        <div>
          { this.props.children }
          <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
          <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button>
          <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : value
   }
}

export default Counter;
