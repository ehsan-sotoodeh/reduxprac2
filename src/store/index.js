import initialState from '../initialState'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from "redux";


const consoleMessages = store => next => action => {
    let results;
    console.groupCollapsed(`dispatching action : ${action.type}`);
    console.log(JSON.stringify(store.getState()));

    results = next(action);

    console.log(JSON.stringify(store.getState()));
    console.groupEnd();
    
    return results;

}

export default () =>{
    return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer,initialState)
}