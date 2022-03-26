import axios from "axios";
import jwtDecode from "jwt-decode";
import setJWTToken from "../securityUtils/setJWTToken";
import { GET_ERRORS, SET_CURRENT_USER, SET_PARENT_USER } from "./types";
import jwt from "jsonwebtoken"
import {jwTDecode} from "../securityUtils/setJWTToken"
export const createNewUser=(newUser,history)=>async dispatch=>{
    try{
        await axios.post("https://agile-int-ppm-tool.herokuapp.com/api/users/register",newUser);
        history.push("/login")
        dispatch({
            type: GET_ERRORS,
            payload:{}
        })
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
}

export const login = LoginRequest => async dispatch=>{
   try {
     const res = await axios.post("https://agile-int-ppm-tool.herokuapp.com/api/users/login",LoginRequest);  
     const token = res.data.token;
     localStorage.setItem("jwtToken",token);
     
    
    console.log(token);
    setJWTToken(token);
   const decoded= jwtDecode(token);
    
    console.log(decoded);
   
    
    dispatch({
         type:SET_CURRENT_USER,
         payload:decoded
     })
  
    }
    catch (err) {
  console.log(err);
        dispatch({
       type:GET_ERRORS,
       payload: err.response.data
   })    
   }   
    //post => Login request
    //
    // extract token from res data 
    //store the token in the local storage
    //store the token in header ***
    //decode token on our securityReducer
}
export const logout=()=> dispatch =>{
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    dispatch({
        type:SET_CURRENT_USER,
        payload:{}
    })
};  

