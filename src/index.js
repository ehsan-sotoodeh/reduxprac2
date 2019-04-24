import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addDay,
        removeDay,
        setGoal,
        addError,
        clearError,
        changeSuggestions,
        clearSuggestions,
        randomGoals,
        suggestResortNames
     } from './store/actions';
import storeFactory from './store';
import {Provider } from 'react-redux'

const store = storeFactory();


// store.dispatch(
//     suggestResortNames(2)
// );

// store.dispatch(
//     randomGoals()
// )
// store.dispatch(
//     addDay("Resort BlackStrap","2010-11-9")
// );

// store.dispatch(
//     removeDay("2016-08-11")
// );

// store.dispatch(
//     setGoal(100)
// );
setTimeout(() => {
    store.dispatch(
        addError("something went wrong!!!")
    )
}, 1500);

// store.dispatch(
//     clearError(0)
// )
// store.dispatch(
//     changeSuggestions(["AAA00AAA","BBBB00BBB","CCCC00CCCCC","DD00DDD","EEEE00EEE"])
// )
// store.dispatch(
//     clearSuggestions()
// )


ReactDOM.render(<Provider store={store} ><App hi="MMMM" /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
