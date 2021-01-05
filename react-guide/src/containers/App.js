import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 'awesg', name: 'Mason', age: 26 },
      {id: 'werterytq', name: 'Autumn', age: 28 },
      {id: '3154yw', name: 'Bob', age: 45}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

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
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler} />
    }

    return (
        <div className={classes.App}>
        <button onClick = {() => {this.setState({showCockpit:false})}}>Remove Cockpit</button>
          {this.state.showCockpit ? (<Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
          />) : null }
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
