import C from '../constants'
import {combineReducers} from 'redux'

export const goal = (state = 10,action) =>{
    if(action.type === C.SET_GOAL){
        return parseInt(action.payload);
    }else{
        return state;
    }
}

export const skiDay = (state = null, action) =>{
    if(action.type === C.ADD_DAY){
        return action.payload;
    }else{
        return state;
    }
}

export const errors = (state = [], action) =>{
    switch(action.type){
        case C.ADD_ERROR:
            return [...state,action.payload];
        case C.CLEAR_ERROR:
            return state.filter((message, i) => i !== action.payload)
        default:
            return state;
    }


}

export const allSkiDays = (state = [], action) =>{
    switch(action.type){
        case C.ADD_DAY:
            const hasDayAlready = state.some(skyDay =>  skyDay.date == action.payload.date);
            return (hasDayAlready) ?
                    state:
                    [
                        ...state,
                        skiDay(null,action)
                    ];
        case C.REMOVE_DAY:
            return state.filter((skiDay)=>skiDay.date !== action.payload);
        default:
            return state;
    }


}

export const fetching = (state = false, action) => {
    switch(action.type){
        case C.FETCH_RESORTS_NAMES:
            return true;
        case C.CANCEL_FETCHING:
            return false;
        case C.CHANGE_SUGGESTIONS:
            return false;
        default:
            return state;
    }
}

export const suggestions = (state = [], action) => {
    switch(action.type){
        case C.CLEAR_SUGGESTIONS:
            return [];
        case C.CHANGE_SUGGESTIONS:
            return state = action.payload;
        default:
        return state;
    }
}

const resortsNames = combineReducers({
    fetching,
    suggestions
});

export default combineReducers({
    allSkiDays,
    goal,
    errors,
    resortsNames : combineReducers({
        fetching,
        suggestions
    })
});
