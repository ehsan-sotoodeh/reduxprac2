import C from '../constants';
import fetch from 'isomorphic-fetch'
export const  addDay = (resort , date , powder = false , backcountry = false) =>{
    // Add logic here!!!
    return{
        type: C.ADD_DAY,
        payload : {resort,date,powder,backcountry}
    }
};

export const removeDay = (date) =>{
    return {
        type : C.REMOVE_DAY,
        payload : date
    }
};

export const setGoal = (goal) =>{
    return {
        type : C.SET_GOAL,
        payload : goal
    }
}
export const addError = (error) =>{
    return {
        type : C.ADD_ERROR,
        payload : error
    }
}
export const clearError = (error) =>{
    return {
        type : C.CLEAR_ERROR,
        payload : error
    }
}
export const changeSuggestions = (suggestions) =>{
    return {
        type : C.CHANGE_SUGGESTIONS,
        payload : suggestions
    }
}
export const clearSuggestions = () =>{
    return {
        type : C.CLEAR_SUGGESTIONS
    }
}

export const suggestResortNames = (value) => (dispatch , getState) =>{
    dispatch({
        type: C.FETCH_RESORTS_NAMES
    });
    fetch("https://jsonplaceholder.typicode.comp/posts?userId="+value)
        .then(response => response.json())
        .then(res =>{
            let suggestions = res.map(post => post.title);
            dispatch({
                type:C.CHANGE_SUGGESTIONS,
                payload:suggestions
            });
            dispatch({
                type: C.CANCEL_FETCHING
            });
        })
        .catch(err =>{
            dispatch({
                type: C.ADD_ERROR,
                payload:err.message
            });
            dispatch({
                type:C.CANCEL_FETCHING,
            })
        })
}