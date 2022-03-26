import React from 'react';
import './NextPageButton.css';



const nextPageButton=(props)=>(
<button style={{color:'#5C9210'}}
className='nextPageButton' onClick={props.click}>NEXT PAGE</button>
)
export default nextPageButton;