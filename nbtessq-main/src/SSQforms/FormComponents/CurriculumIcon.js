import React from 'react'
import Curriculum from './icons8-curriculum-64.svg';
import { Icon } from "@material-ui/core";

function CurriculumIcon() {
    return (
        <Icon>
        <img src={Curriculum} height={25} width={25}/>
    </Icon>)
}

export default CurriculumIcon
