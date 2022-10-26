import React, { Component } from "react";

class Counter extends Component {

  componentDidUpdate(previousProps, previousState){
    console.log('LifeCycle Hooks (counter) - Update - componentDidUpdate');
    console.log('previousProps: ', previousProps);
    console.log('previousState: ', previousState);

    if (previousProps.counter.value !== this.props.counter.value) {
      //Ajax call to get new data from svr  `
      console.log('Dummy ajax call here!');
    }

  }

  badgeStyles = {
    fontSize: 10,
    fontWeight: "bold"
  }

  componentWillUnmount(){
    console.log('LifeCycle Hooks (counter) - Unmount - componentWillUnmount');

    //Call to clean stuff after unmount(delete)  `
    console.log('Dummy Call to clean stuff after unmount(delete)!');
  }

  render() {
    console.log('Counter - Render');
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
