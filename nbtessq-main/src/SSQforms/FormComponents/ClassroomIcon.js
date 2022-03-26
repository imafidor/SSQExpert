import React from 'react';

import Classrooms from './classroom-svgrepo-com.svg';
import { Icon } from "@material-ui/core";

function ClassroomIcon() {
    return (<Icon>
        <img src={Classrooms} height={25} width={25}/>
    </Icon>
        
    )
}

export default ClassroomIcon
