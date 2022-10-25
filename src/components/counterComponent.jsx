import React, { Component } from "react";

class Counter extends Component {
  state = {  
    count: 0,
    tag: ["tag1", "tag2", "tag3"]
  }

  badgeStyles = {
    fontSize: 10,
    fontWeight: "bold"
  }

  render() {

    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button className="btn btn-secondary btn-sm">Increment</button>
          <ul>
            {this.state.tag.map(tag => <li>{tag}</li> )}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count
   }
}

export default Counter;
