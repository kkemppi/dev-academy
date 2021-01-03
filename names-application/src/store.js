import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import namesReducer from './reducers/namesReducer'

export default createStore(namesReducer, composeWithDevTools(applyMiddleware(thunk)))