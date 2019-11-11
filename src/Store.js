// ======== import Redux dependencies 
import {createSttore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// import our root reducer
import rootReducer from './Reducers/rootreducer'

const initialState={}
const middleWare=[thunk]

const store=createSttore(
    initialState,
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;