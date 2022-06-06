import { createStore, applyMiddleware } from 'redux'
//store 3 import thunk from redux-thunk
import thunk from 'redux-thunk'
//create reducers and state files and import here
import reducers from './reducers'
import state from './state'

//export createStore(reducers,state,applyMiddleware(thunk))
export default createStore(reducers, state, applyMiddleware(thunk))