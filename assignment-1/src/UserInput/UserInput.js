import React, { Component } from 'react';

const UserInput = (props) => {
    const style = {
        backgroundColor: 'lightblue',
        width: '40%',
        margin: '20px auto',
        fontSize: '20px',
        border: '2px solid black',
        textAlign: 'center'
      }
    return(
        <div>
            <input style ={style} type='text' onChange={props.newUser}  value={props.username}/>
        </div>
    )
}

export default UserInput;