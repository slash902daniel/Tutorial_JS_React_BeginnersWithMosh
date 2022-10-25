import React, { Component } from "react";

class Counter extends Component {
  state = {  
    value: 0,
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
    
    return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>;
  }

  handleIncrement(){
    this.setState({value: this.state.value + 1});
  }

  handleIncrement_V_Experimental = product => {
    console.log("Increment Clicked:product:  ", product);
    console.log("Increment Clicked this: ", this);
    console.log("Increment Clicked2 props: ", this.props);
    console.log("Increment Clicked2 props.value: ", this.props.value);
    this.setState({value: this.state.value + 1});
  }

  render() {
    console.log("render props: ", this.props);
    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
          <button onClick={ () => this.handleIncrement_V_Experimental({ id: 1 }) } className="btn btn-secondary btn-sm">Increment</button>
          {this.state.tags===0 && 'Please create a new tag!'}
          {this.renderTags()}  
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.state;
    return value === 0 ? <h1>Zero</h1> : value
   }
}

export default Counter;
