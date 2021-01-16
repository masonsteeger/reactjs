import * as actionTypes from './actions'

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ADD_PERSON:
            return {
                ...state,
                persons: state.persons.concat({id: action.payload.id, name:action.payload.name, age: action.payload.age})
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