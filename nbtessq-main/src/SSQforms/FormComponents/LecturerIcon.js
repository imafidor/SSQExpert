import React from 'react'
import Lecturer from './icons8-lecturer-50.svg';
import { Icon } from "@material-ui/core";


function LecturerIcon() {
    return (<Icon>
        <img src={Lecturer} height={25} width={25}/>
    </Icon>
        )
}

export default LecturerIcon
