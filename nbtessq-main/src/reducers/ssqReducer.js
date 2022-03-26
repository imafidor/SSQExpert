import {GET_GOALS_AND_OBJECTIVES, GET_LABORATORIES} from "../actions/types";


const initalState ={
    goalsAndObjectives:[],
    laboratories:[]
};

export default function(state= initalState,action){
    switch(action.type){
    case GET_GOALS_AND_OBJECTIVES:
        return{
    ...state,
    goalsAndObjectives:action.payload
        };
    case GET_LABORATORIES:
        return{
            ...state,
            laboratories:action.payload
        }
        default:
            return state;
    
        }
    
    
    
    
    
    }