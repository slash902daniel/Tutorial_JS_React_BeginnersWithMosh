import React, { Component} from "react";
import Counter from "./counterComponent";

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 3},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }

    handleDelete = () => {
        console.log("Event Handler Called");

    };

    render() {
        return (
             <div>
                { this.state.counters.map(counter => (
                <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} selected={true} id={counter.id} >
                    <h4>Title#{counter.id}</h4>
                </Counter>    
                ))}
             </div>
        );
    }

}

export default Counters;