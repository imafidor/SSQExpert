import React from 'react';
import './Toolbar.css';

const toolbar= (props)=>(

    <header className = 'Toolbar'>
        <div>HOME</div>
        <div>{props.institutionName}</div>
        <nav>
            ...
        </nav>
    </header>

);
export default toolbar;

