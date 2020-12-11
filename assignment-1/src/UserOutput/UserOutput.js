import React, { Component } from 'react';

const UserOutput = (props) => {
    const style = {
        backgroundColor: 'lightblue',
        width: '40%',
        margin: '20px auto',
        fontSize: '26px',
        border: '2px solid black',
        boxShadow: '2px 3px grey',
        textAlign: 'center'
      }
    return(
    <div>
        <p style={style}>{props.username}</p>
    </div>
    )
}

export default UserOutput;