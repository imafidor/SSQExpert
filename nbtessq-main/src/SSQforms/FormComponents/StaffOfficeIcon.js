import React from 'react'
import Office from './staff_office.svg'
import { Icon } from "@material-ui/core";
function StaffOfficeIcon() {
    return (<Icon>
        <img src={Office} height={25} width={25}/>
    </Icon>)
}

export default StaffOfficeIcon
