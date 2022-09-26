import { combineReducers } from 'redux';
import { InitialContactForm } from './forms';
import { createForms } from 'react-redux-form';
import * as actionTypes from './actionTypes';

const dishReducer = (dishState = { isLoading: false, dishes:[] }, action) => {
    switch(action.type){
        case actionTypes.DISHES_LOADING:
            return{
                ...dishState,
                isLoading: true,
                dishes: []
            }
        case actionTypes.LOAD_DISHES:
              return {  
                 ...dishState,
                 isLoading: false,
                 dishes: action.playload
              }
        default:
            return dishState;
    }
    
}
const commentReducer = (commentState = {isLoading: true, comments:[] }, action) =>{
    switch(action.type){
        case actionTypes.LOAD_COMMENTS:
            return{
                ...commentState,
                isLoading : false,
                comments :action.playload
            };
        case actionTypes.COMMENTS_LOADING:
            return{
                ...commentState,
                isLoading : true,
                comments :[]
            };
        case actionTypes.ADD_COMMENT :
        let comment = action.playload;
        // console.log(comment);
        return {
            ...commentState,
            comments : commentState.comments.concat(comment)
        }
        default:
            return commentState;
    }  
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback:InitialContactForm
    })
})