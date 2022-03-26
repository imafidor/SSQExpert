import React from 'react';
import './Input.css';




const input = (props)=>(
    <div className = 'Input'>
<label className= 'Label'><strong>{props.label}</strong></label>
    <input className = "InputElement" name = {props.name} value = {props.value} type = {props.type}  onChange={props.changed}/>
    
    </div>
);
export default input;