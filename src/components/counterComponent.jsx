import React, { Component } from "react";

class Counter extends Component {
  state = {  
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  }

  constructor(){
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  badgeStyles = {
    fontSize: 10,
    fontWeight: "bold"
  }

  renderTags(){
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    
    return <ul> {this.state.tags.map(tag => <li>{tag}</li>)} </ul>;
  }

  handleIncrement(){
    console.log("Increment Clicked");
    //...more logic
  }

  handleIncrement_V_Experimental = () => {
    console.log("Increment Clicked", this);
    //...more logic
  }

  render() {

    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={this.handleIncrement()} className="btn btn-secondary btn-sm">Increment</button>
          {this.state.tags===0 && 'Please create a new tag!'}
          {this.renderTags()}  
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
