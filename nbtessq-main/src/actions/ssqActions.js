import axios from "axios";
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS ,DELETE_PROJECT,GET_LABORATORIES,GET_GOALS_AND_OBJECTIVES} from "./types";

export const getGoalsAndObjectives=()=> async dispatch =>{
    try{
      const res = await axios.get("http://localhost:8000/api/GoalsAndObjectives")
       dispatch({
      type:GET_GOALS_AND_OBJECTIVES,
      payload:res.data
      })
    }catch(error){
        console.log(error);
    }
    
     }

     export const getLaboratories=()=> async dispatch=>{
         try {
            const res = await axios.get("http://localhost:8000/api/Laboratories") 
      dispatch({
          type:GET_LABORATORIES,
          payload:res.data
      })

         } catch (error) {
            console.log(error);
         }

     }