import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'awesg', name: 'Mason', age: 26 },
      {id: 'werterytq', name: 'Autumn', age: 28 },
      {id: '3154yw', name: 'Bob', age: 45}
    ],
    otherState: 'some other value',
    showPersons: false
  };


  nameChangeHandler = (event, id) => {
   const personIndex = this.state.persons.findIndex(p => {
     return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }

   person.name = event.target.value;

   const persons = [...this.state.persons];
   persons[personIndex] = person;

   this.setState({persons: persons})

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = (bool) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }


  render() {
  const style = {
    backgroundColor: 'pink',
    font: 'inherit',
    border: '3px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return(
              <Person
                click = {() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id} 
                changed={(event) => this.nameChangeHandler(event, person.id)}/>
            )
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle View Persons</button>
       {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
