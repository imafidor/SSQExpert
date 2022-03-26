import React from 'react'
import Technician from './mechanic.svg'
import { Icon } from "@material-ui/core";

function TechnicianIcon() {
    return (<Icon>
        <img src={Technician} height={25} width={25}/>
    </Icon>)
}

export default TechnicianIcon
