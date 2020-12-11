import React, { Component } from 'react';

const UserInput = (props) => {
    return(
        <div>
            <input type='text' onChange={props.newUser}  value={props.username}/>
        </div>
    )
}

export default UserInput;