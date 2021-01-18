import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {

    state = {
        name: '',
        age: null
    }

    nameChangeHandler = (event) => {
        this.setState({name: event.target.value})
    }

    ageChangeHandler = (event) => {
        this.setState({age: event.target.value})
    }

    render(){
        return(
            <div className="AddPerson">
                <input 
                    type="text" 
                    placeholder="Name"
                    onChange={this.nameChangeHandler}
                    />
                <input 
                    type="number" 
                    placeholder="Age" 
                    onChange={this.ageChangeHandler}
                    />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>

        )
    }
}

export default AddPerson;