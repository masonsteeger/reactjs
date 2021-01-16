import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions'

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Mason',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.onAddPerson(newPerson.id, newPerson.name, newPerson.age)
    }

    personDeletedHandler = (personId) => {
        this.props.onDeletePerson(personId)
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.prsns.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prsns: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (id, name, age) => dispatch({type: actionTypes.ADD_PERSON, payload: {id: id, name: name, age: age}}),
        onDeletePerson: (id) => dispatch({type: actionTypes.DELETE_PERSON, id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);