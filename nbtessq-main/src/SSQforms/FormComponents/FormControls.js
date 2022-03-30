
import './FormControls.css';
import React from 'react'

function FormControls(props) {
    return (<div className = {props.wide?'FormControls1':'FormControls'}>
           {props.children}
           </div>)
}

export default FormControls
