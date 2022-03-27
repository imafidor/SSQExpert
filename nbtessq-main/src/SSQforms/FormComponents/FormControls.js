
import './FormControls.css';
import React from 'react'

function FormControls(props) {
    return (<div className = 'FormControls'>
           {props.children}
           </div>)
}

export default FormControls
