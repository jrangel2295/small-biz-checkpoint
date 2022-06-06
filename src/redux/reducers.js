import { combineReducers } from 'redux'

const user = (state = null) => state

const businesses = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            console.log(...state)
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const businesses = [...state]
            console.log(action.value)
            businesses.splice(action.value, 1)
            return businesses
        case 'FETCH_LIST':
            return action.value
        default:
            return state
    }
}

//export all variable in a combineReduers method
export default combineReducers({ user, businesses })