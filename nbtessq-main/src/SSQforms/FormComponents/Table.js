import React from 'react';

import './Table.css';

const Table =(props)=>(
<div>
     <table className = 'Table'> 
        {props.children}
   </table>
     </div>
);
export default Table;