import React, { Component} from "react";
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
class App extends Component {
  constructor(){
    super();
    console.log('LifeCycle Hooks (Main App) - Mount - constructor');
    //this.state = this.props.something;
    //If you want to use props here.. need to add props as constructor arg and also in the super call (super(props))

  }

  componentDidMount(){
    console.log('LifeCycle Hooks (Main App) - Mount - componentDidMount');
    //Ajax call
    //this.setState({})
  }

  state = {
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 4},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
  }
  
  handleIncrement = (counter) => {
    console.log("handleIncrement - Event Handler Called", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  };
  
  handleDelete = (counterId) => {
    console.log("handleDelete - Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };
  
  handleReset = () => {
    console.log("handleReset - Event Handler Reset called");
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    })
  
    this.setState({counters});
  };

  render() {
    console.log('LifeCycle Hooks (Main App) - Mount - Render');

    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement} 
          onDelete={this.handleDelete}
        />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
