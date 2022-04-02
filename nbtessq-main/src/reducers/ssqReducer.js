import {GET_GOALS_AND_OBJECTIVES, GET_LABORATORIES, GET_LAB_EQUIPMENTS} from "../actions/types";


const initalState ={
    goalsAndObjectives:[],
    laboratories:[],
    labWithEquipments:[]
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
        case GET_LAB_EQUIPMENTS:
        return { 
            ...state,
            labWithEquipments: [...state.labWithEquipments, action.payload]
        }
        default:
            return state;
    
        }
    
    
    
    
    
    }