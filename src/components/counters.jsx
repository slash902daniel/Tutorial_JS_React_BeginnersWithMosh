import React, { Component} from "react";
import Counter from "./counterComponent";

class Counters extends Component {
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
        return (
             <div>
                
                <button 
                onClick={this.handleReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
                { this.state.counters.map(counter => (
                <Counter 
                    key={counter.id} 
                    onDelete={this.handleDelete} 
                    onIncrement={this.handleIncrement} 
                    counter={counter} 
                >
                <h4>Title#{counter.id}</h4>
                </Counter>    
                ))}
             </div>
        );
    }

}

export default Counters;