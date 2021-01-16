import * as actionTypes from './actions'

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Mason',
                age: Math.floor( Math.random() * 40 )
            }
            return {
                ...state,
                persons: state.persons.concat({id: newPerson.id, name:newPerson.name, age: newPerson.age})
            }
        case actionTypes.DELETE_PERSON:
            const newPersons = state.persons.filter((person)=> person.id !== action.id)
            return {
                ...state,
                persons: newPersons
            }

        default:
            return state
    }
}

export default reducer;