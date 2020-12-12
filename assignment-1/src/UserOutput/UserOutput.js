import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    
    return(
    <div className='UserOutput'>
        <p>{props.username}</p>
        <p>Some other paragraph</p>
    </div>
    )
}

export default UserOutput;