import React, { Component} from "react";
import Counter from "./counterComponent";

class Counters extends Component {

    render() {
        console.log('Counters - Render');

        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (
             <div>
                
                <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
                { counters.map(counter => (
                <Counter 
                    key={counter.id} 
                    onDelete={onDelete} 
                    onIncrement={onIncrement} 
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